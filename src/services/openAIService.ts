import {
	AIGeneratedInsights,
	ReportVariable,
	AggregatedMetric,
	REPORT_VARIABLES,
	EnrichedReportData,
	SegmentInsight,
	SegmentAnalysis
} from '../features/analytics/types';

interface OpenAIConfig {
	apiKey: string | null;
	model: string;
	maxTokens: number;
	temperature: number;
}

const config: OpenAIConfig = {
	apiKey: process.env.REACT_APP_OPENAI_API_KEY || null,
	model: 'gpt-4',
	maxTokens: 2000,
	temperature: 0.7
};

export interface OpenAIError {
	type: 'auth' | 'rate_limit' | 'invalid_request' | 'server' | 'network';
	message: string;
	retryable: boolean;
}

const formatMetrics = (metrics: AggregatedMetric[]) => {
	return metrics.map(d => ({
		category: d.label,
		count: d.value,
		percentage: d.percentage
	}));
};

const formatSegmentData = (segment: SegmentAnalysis, selectedVariable: ReportVariable) => {
	const breakdowns: Record<string, unknown> = {};

	// Include all breakdowns except the one for the selected variable
	if (selectedVariable !== 'skillCategory') {
		breakdowns.skills = formatMetrics(segment.breakdowns.skills.slice(0, 5));
	}
	if (selectedVariable !== 'engagementStatus') {
		breakdowns.engagementStatus = formatMetrics(segment.breakdowns.engagementStatus);
	}
	if (selectedVariable !== 'employmentStatus') {
		breakdowns.employmentStatus = formatMetrics(segment.breakdowns.employmentStatus);
	}
	if (selectedVariable !== 'qualificationLevel') {
		breakdowns.qualifications = formatMetrics(segment.breakdowns.qualificationLevels.slice(0, 5));
	}
	if (selectedVariable !== 'community') {
		breakdowns.communities = formatMetrics(segment.breakdowns.communityBreakdown.slice(0, 5));
	}
	if (selectedVariable !== 'gender') {
		breakdowns.gender = formatMetrics(segment.breakdowns.genderDistribution);
	}

	return {
		segment: segment.segmentLabel,
		count: segment.segmentValue,
		percentage: segment.segmentPercentage,
		breakdowns
	};
};

const buildEnrichedPrompt = (enrichedData: EnrichedReportData): string => {
	const variableConfig = REPORT_VARIABLES[enrichedData.variable];

	const mainDistribution = JSON.stringify(formatMetrics(enrichedData.mainDistribution), null, 2);
	const segmentData = JSON.stringify(
		enrichedData.segments.map(s => formatSegmentData(s, enrichedData.variable)),
		null,
		2
	);

	return `You are an analytics expert analyzing workforce data for an Indigenous employment program in Australia.

Analyze the following ${variableConfig.label} data with detailed segment breakdowns and provide deep insights.

MAIN DISTRIBUTION (${variableConfig.label}):
${mainDistribution}

SEGMENT ANALYSIS (for each ${variableConfig.label.toLowerCase()} segment, showing breakdowns of other variables):
${segmentData}

Context: This data comes from BoAbCo, a workforce development program supporting Indigenous communities in regional Western Australia. The analysis should be culturally sensitive and focus on positive outcomes and opportunities.

Total participants: ${enrichedData.totalRecords}

Provide your analysis in the following JSON format:
{
  "summary": "A 3-4 sentence executive summary highlighting the most significant patterns and cross-segment differences",
  "keyFindings": [
    "Finding about overall distribution",
    "Finding about cross-segment patterns",
    "Finding about employment/engagement correlations",
    "Finding about skills or qualifications patterns"
  ],
  "recommendations": [
    "Actionable recommendation based on segment-specific insights",
    "Recommendation for underrepresented or at-risk segments",
    "Recommendation for leveraging strengths found in the data"
  ],
  "dataQuality": "Note on data quality, sample sizes across segments, and limitations",
  "segmentInsights": [
    {
      "segmentLabel": "Segment Name",
      "findings": ["Key characteristic of this segment", "Notable pattern in this segment"],
      "comparisons": ["How this segment compares to others"]
    }
  ]
}

Important:
- Analyze the cross-tabulated data to identify patterns WITHIN each segment
- Compare segments against each other to find meaningful differences
- Look for correlations between the selected variable and employment outcomes, engagement, and skills
- Use respectful and inclusive language appropriate for Indigenous Australian contexts
- Keep findings specific and data-driven
- Provide segment-specific insights for each segment with enough data`;
};

const parseEnrichedAIResponse = (content: string): AIGeneratedInsights => {
	try {
		const jsonMatch = content.match(/\{[\s\S]*\}/);
		if (jsonMatch) {
			const parsed = JSON.parse(jsonMatch[0]);
			return {
				summary: parsed.summary || 'Analysis completed.',
				keyFindings: Array.isArray(parsed.keyFindings) ? parsed.keyFindings : [],
				recommendations: Array.isArray(parsed.recommendations) ? parsed.recommendations : [],
				dataQuality: parsed.dataQuality || 'Data has been anonymized for privacy.',
				segmentInsights: Array.isArray(parsed.segmentInsights)
					? parsed.segmentInsights.map((s: SegmentInsight) => ({
						segmentLabel: s.segmentLabel || 'Unknown',
						findings: Array.isArray(s.findings) ? s.findings : [],
						comparisons: Array.isArray(s.comparisons) ? s.comparisons : []
					}))
					: []
			};
		}
		throw new Error('No JSON found in response');
	} catch {
		return {
			summary: content.substring(0, 500),
			keyFindings: ['Analysis generated but could not be fully structured'],
			recommendations: ['Please review the summary above'],
			dataQuality: 'Response parsing encountered an issue',
			segmentInsights: []
		};
	}
};

const getMockEnrichedInsights = (enrichedData: EnrichedReportData): AIGeneratedInsights => {
	const variableConfig = REPORT_VARIABLES[enrichedData.variable];
	const total = enrichedData.totalRecords;
	const segments = enrichedData.segments;
	const largest = enrichedData.mainDistribution.length > 0
		? enrichedData.mainDistribution.reduce((max, d) => d.value > max.value ? d : max, enrichedData.mainDistribution[0])
		: null;

	// Generate segment-specific insights
	const segmentInsights: SegmentInsight[] = segments.map(segment => {
		const topSkill = segment.breakdowns.skills[0];
		const employmentRate = segment.breakdowns.employmentStatus.find(e => e.label === 'Employed');
		const activeRate = segment.breakdowns.engagementStatus.find(e => e.label === 'Active');

		const findings: string[] = [];
		const comparisons: string[] = [];

		if (topSkill) {
			findings.push(`Most common skill area: ${topSkill.label} (${topSkill.percentage}%)`);
		}
		if (employmentRate) {
			findings.push(`Employment rate: ${employmentRate.percentage}%`);
		}
		if (activeRate) {
			findings.push(`Active engagement: ${activeRate.percentage}% currently active`);
		}

		// Generate comparisons
		const avgEmployment = segments.reduce((sum, s) => {
			const emp = s.breakdowns.employmentStatus.find(e => e.label === 'Employed');
			return sum + (emp?.percentage || 0);
		}, 0) / segments.length;

		const empRate = employmentRate?.percentage ?? 0;
		if (employmentRate && empRate > avgEmployment + 5) {
			comparisons.push(`Higher employment rate than average (+${Math.round(empRate - avgEmployment)}%)`);
		} else if (employmentRate && empRate < avgEmployment - 5) {
			comparisons.push(`Employment rate below average (-${Math.round(avgEmployment - empRate)}%)`);
		}

		return {
			segmentLabel: segment.segmentLabel,
			findings,
			comparisons
		};
	});

	// Generate key findings based on cross-segment analysis
	const keyFindings: string[] = [
		`Total of ${total} participants analyzed across ${segments.length} ${variableConfig.label.toLowerCase()} segments`,
		largest ? `"${largest.label}" is the largest segment at ${largest.percentage}%` : 'Distribution is relatively even across segments'
	];

	// Find segment with highest employment
	const segmentEmployment = segments.map(s => ({
		label: s.segmentLabel,
		rate: s.breakdowns.employmentStatus.find(e => e.label === 'Employed')?.percentage || 0
	})).sort((a, b) => b.rate - a.rate);

	if (segmentEmployment.length > 0 && segmentEmployment[0].rate > 0) {
		keyFindings.push(`Highest employment rate found in "${segmentEmployment[0].label}" segment (${segmentEmployment[0].rate}%)`);
	}

	// Find most common skill across all segments
	const allSkills: Record<string, number> = {};
	segments.forEach(s => {
		s.breakdowns.skills.forEach(skill => {
			allSkills[skill.label] = (allSkills[skill.label] || 0) + skill.value;
		});
	});
	const topOverallSkill = Object.entries(allSkills).sort(([, a], [, b]) => b - a)[0];
	if (topOverallSkill) {
		keyFindings.push(`"${topOverallSkill[0]}" is the most common skill across all segments`);
	}

	return {
		summary: `This ${variableConfig.label.toLowerCase()} analysis covers ${total} participants across ${segments.length} segments. ${largest ? `The largest group is "${largest.label}" representing ${largest.percentage}% of the total.` : ''} Cross-tabulated analysis reveals distinct patterns in employment outcomes, engagement levels, and skills distribution across different ${variableConfig.label.toLowerCase()} groups.`,
		keyFindings,
		recommendations: [
			`Focus employment support resources on segments with lower employment rates`,
			`Leverage skills strengths identified in each segment for targeted job matching`,
			`Consider tailored engagement strategies based on segment-specific patterns`,
			`Monitor cross-segment trends to identify emerging opportunities`
		],
		dataQuality: `Data is anonymized with a threshold of 3. Categories with fewer than 3 participants are grouped as "Other" to protect individual privacy. Total sample size: ${total} participants across ${segments.length} analyzable segments. Cross-tabulated breakdowns provide additional demographic and outcome insights for each segment.`,
		segmentInsights
	};
};

const handleAPIError = async (response: Response): Promise<OpenAIError> => {
	const status = response.status;
	const body = await response.json().catch(() => ({}));

	if (status === 401) {
		return { type: 'auth', message: 'Invalid API key. Please check your OpenAI API key configuration.', retryable: false };
	}
	if (status === 429) {
		return { type: 'rate_limit', message: 'Rate limit exceeded. Please try again in a few moments.', retryable: true };
	}
	if (status === 400) {
		return { type: 'invalid_request', message: body.error?.message || 'Invalid request to OpenAI API', retryable: false };
	}
	return { type: 'server', message: 'OpenAI service is temporarily unavailable', retryable: true };
};

const normalizeError = (error: unknown): OpenAIError => {
	if (error && typeof error === 'object' && 'type' in error) {
		return error as OpenAIError;
	}
	return {
		type: 'network',
		message: error instanceof Error ? error.message : 'An unknown error occurred',
		retryable: true
	};
};

export const openAIService = {
	isConfigured(): boolean {
		return !!config.apiKey;
	},

	async generateEnrichedInsights(enrichedData: EnrichedReportData): Promise<AIGeneratedInsights> {
		if (!this.isConfigured()) {
			console.log('OpenAI API key not configured. Using mock insights.');
			await new Promise(resolve => setTimeout(resolve, 1500));
			return getMockEnrichedInsights(enrichedData);
		}

		try {
			const prompt = buildEnrichedPrompt(enrichedData);

			const response = await fetch('https://api.openai.com/v1/chat/completions', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${config.apiKey}`
				},
				body: JSON.stringify({
					model: config.model,
					messages: [
						{
							role: 'system',
							content: 'You are a data analyst specializing in workforce development analytics for Indigenous Australian communities. Provide culturally sensitive, actionable insights. Always respond with valid JSON in the exact format requested.'
						},
						{
							role: 'user',
							content: prompt
						}
					],
					max_tokens: config.maxTokens,
					temperature: config.temperature
				})
			});

			if (!response.ok) {
				throw await handleAPIError(response);
			}

			const responseData = await response.json();
			const content = responseData.choices[0]?.message?.content;

			if (!content) {
				const emptyResponseError = new Error('Empty response from OpenAI');
				(emptyResponseError as Error & { type: string; retryable: boolean }).type = 'server';
				(emptyResponseError as Error & { type: string; retryable: boolean }).retryable = true;
				throw emptyResponseError;
			}

			return parseEnrichedAIResponse(content);
		} catch (error) {
			console.error('OpenAI API error:', error);

			const normalizedError = normalizeError(error);
			if (normalizedError.retryable) {
				console.log('Falling back to mock insights due to error');
				return getMockEnrichedInsights(enrichedData);
			}

			throw normalizedError;
		}
	}
};
