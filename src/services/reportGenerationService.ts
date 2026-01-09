import { v4 as uuidv4 } from 'uuid';
import { mockAnalyticsClient } from './mockAnalyticsClient';
import { openAIService } from './openAIService';
import {
	ReportVariable,
	AnalyticsReport,
	ReportSection,
	ReportStatistic,
	AnalyticsFilters,
	AggregatedMetric,
	REPORT_VARIABLES,
	AIGeneratedInsights,
	EnrichedReportData
} from '../features/analytics/types';

interface ReportGenerationProgress {
	step: 'aggregating' | 'analyzing' | 'generating' | 'complete';
	progress: number;
}

type ProgressCallback = (progress: ReportGenerationProgress) => void;

const calculateStatistics = (data: AggregatedMetric[], totalRecords: number): ReportStatistic[] => {
	if (data.length === 0) {
		return [
			{ label: 'Total Records', value: 0 },
			{ label: 'Categories', value: 0 }
		];
	}

	const total = data.reduce((sum, item) => sum + item.value, 0);
	const largest = data.reduce((max, item) => item.value > max.value ? item : max, data[0]);
	const smallest = data.reduce((min, item) => item.value < min.value ? item : min, data[0]);

	const stats: ReportStatistic[] = [
		{ label: 'Total Records', value: totalRecords },
		{ label: 'Categories', value: data.length },
		{
			label: 'Largest Group',
			value: `${largest.label}`,
			context: `${largest.percentage ?? Math.round((largest.value / total) * 100)}%`
		},
		{
			label: 'Smallest Group',
			value: `${smallest.label}`,
			context: `${smallest.percentage ?? Math.round((smallest.value / total) * 100)}%`
		}
	];

	return stats;
};

const assembleReport = (
	reportId: string,
	enrichedData: EnrichedReportData,
	statistics: ReportStatistic[],
	aiInsights: AIGeneratedInsights,
	filters: AnalyticsFilters
): AnalyticsReport => {
	const variableConfig = REPORT_VARIABLES[enrichedData.variable];
	const otherCategory = enrichedData.mainDistribution.find(d => d.label === 'Other');

	const sections: ReportSection[] = [
		{
			id: 'overview',
			title: 'Overview',
			content: aiInsights.summary,
			statistics: statistics,
			charts: [{
				type: variableConfig.chartType === 'bar' ? 'horizontal-bar' : 'pie',
				title: variableConfig.label,
				data: enrichedData.mainDistribution
			}],
			highlights: aiInsights.keyFindings
		}
	];

	// Add segment-specific insights if available
	if (aiInsights.segmentInsights && aiInsights.segmentInsights.length > 0) {
		aiInsights.segmentInsights.forEach(segmentInsight => {
			const segment = enrichedData.segments.find(s => s.segmentLabel === segmentInsight.segmentLabel);
			if (segment) {
				sections.push({
					id: `segment-${segmentInsight.segmentLabel.toLowerCase().replace(/\s+/g, '-')}`,
					title: `${segmentInsight.segmentLabel} Analysis`,
					content: `Detailed breakdown for ${segmentInsight.segmentLabel} participants (${segment.segmentValue} people, ${segment.segmentPercentage}% of total).`,
					statistics: [
						{ label: 'Count', value: segment.segmentValue },
						{ label: 'Percentage', value: `${segment.segmentPercentage}%` }
					],
					charts: [],
					highlights: [...segmentInsight.findings, ...segmentInsight.comparisons]
				});
			}
		});
	}

	sections.push(
		{
			id: 'recommendations',
			title: 'Recommendations',
			content: 'Based on the analysis, the following actions are recommended to support workforce development goals:',
			statistics: [],
			charts: [],
			highlights: aiInsights.recommendations
		},
		{
			id: 'data-notes',
			title: 'Data Quality & Privacy',
			content: aiInsights.dataQuality,
			statistics: [],
			charts: [],
			highlights: [
				'Data is aggregated and anonymized to protect participant privacy',
				'Categories with fewer than 3 participants are grouped as "Other"',
				'Percentages are calculated from the filtered dataset',
				'Cross-tabulated analysis performed for each segment meeting privacy thresholds'
			]
		}
	);

	return {
		id: reportId,
		title: `${variableConfig.label} Report`,
		variable: enrichedData.variable,
		generatedAt: new Date().toISOString(),
		dataSnapshot: {
			totalRecords: enrichedData.totalRecords,
			anonymizationApplied: true,
			filters
		},
		sections,
		aiInsights,
		metadata: {
			anonymizationThreshold: 3,
			suppressedCategories: otherCategory ? 1 : 0
		}
	};
};

export const reportGenerationService = {
	async generateReport(
		variable: ReportVariable,
		filters: AnalyticsFilters,
		onProgress?: ProgressCallback
	): Promise<AnalyticsReport> {
		const reportId = uuidv4();

		try {
			// Step 1: Aggregate anonymous statistics with cross-tabulation
			onProgress?.({ step: 'aggregating', progress: 10 });
			const enrichedData = await mockAnalyticsClient.getSegmentedAnalytics(variable, filters);

			// Step 2: Calculate overview statistics
			onProgress?.({ step: 'analyzing', progress: 30 });
			await new Promise(resolve => setTimeout(resolve, 200));
			const statistics = calculateStatistics(enrichedData.mainDistribution, enrichedData.totalRecords);

			// Step 3: Generate AI insights with enriched segment data
			onProgress?.({ step: 'generating', progress: 50 });
			const aiInsights = await openAIService.generateEnrichedInsights(enrichedData);

			// Step 4: Assemble report
			onProgress?.({ step: 'complete', progress: 100 });

			return assembleReport(
				reportId,
				enrichedData,
				statistics,
				aiInsights,
				filters
			);
		} catch (error) {
			console.error('Report generation error:', error);
			throw error;
		}
	}
};
