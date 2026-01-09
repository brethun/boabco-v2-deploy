import React from 'react';

interface ReportLoadingStateProps {
	step: 'idle' | 'aggregating' | 'analyzing' | 'generating' | 'complete';
	progress: number;
}

const STEP_LABELS: Record<string, string> = {
	idle: 'Preparing...',
	aggregating: 'Aggregating anonymous statistics...',
	analyzing: 'Analyzing data patterns...',
	generating: 'Generating AI insights...',
	complete: 'Report ready!'
};

const ReportLoadingState: React.FC<ReportLoadingStateProps> = ({ step, progress }) => {
	return (
		<div className="report-loading">
			<div className="report-loading__spinner">
				<svg viewBox="0 0 50 50" className="report-loading__svg">
					<circle
						cx="25"
						cy="25"
						r="20"
						fill="none"
						stroke="currentColor"
						strokeWidth="4"
						strokeLinecap="round"
						strokeDasharray="80, 200"
						strokeDashoffset="0"
					/>
				</svg>
			</div>
			<div className="report-loading__content">
				<p className="report-loading__step">{STEP_LABELS[step]}</p>
				<div className="report-loading__progress-bar">
					<div
						className="report-loading__progress-fill"
						style={{ width: `${progress}%` }}
					/>
				</div>
				<p className="report-loading__percent">{progress}%</p>
			</div>
		</div>
	);
};

export default ReportLoadingState;
