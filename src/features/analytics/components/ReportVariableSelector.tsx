import React from 'react';
import { ReportVariable, REPORT_VARIABLES, VariableConfig } from '../types';

interface ReportVariableSelectorProps {
	selectedVariable: ReportVariable | null;
	onSelect: (variable: ReportVariable) => void;
}

const VariableIcon: React.FC<{ icon: string }> = ({ icon }) => {
	const icons: Record<string, React.ReactNode> = {
		users: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
				<circle cx="9" cy="7" r="4" />
				<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
				<path d="M16 3.13a4 4 0 0 1 0 7.75" />
			</svg>
		),
		'map-pin': (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
				<circle cx="12" cy="10" r="3" />
			</svg>
		),
		activity: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
			</svg>
		),
		briefcase: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
				<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
			</svg>
		),
		award: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<circle cx="12" cy="8" r="7" />
				<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
			</svg>
		),
		tool: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
			</svg>
		)
	};

	return <>{icons[icon] || icons.users}</>;
};

const ReportVariableSelector: React.FC<ReportVariableSelectorProps> = ({
	selectedVariable,
	onSelect
}) => {
	const variables = Object.values(REPORT_VARIABLES) as VariableConfig[];

	return (
		<div className="variable-selector">
			<label className="variable-selector__label">Select a variable to analyze</label>
			<div className="variable-selector__grid">
				{variables.map((variable) => (
					<button
						key={variable.key}
						type="button"
						className={`variable-card ${selectedVariable === variable.key ? 'variable-card--selected' : ''}`}
						onClick={() => onSelect(variable.key)}
					>
						<div className="variable-card__icon">
							<VariableIcon icon={variable.icon} />
						</div>
						<div className="variable-card__content">
							<h4 className="variable-card__title">{variable.label}</h4>
							<p className="variable-card__description">{variable.description}</p>
						</div>
						{selectedVariable === variable.key && (
							<div className="variable-card__check">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
									<polyline points="20 6 9 17 4 12" />
								</svg>
							</div>
						)}
					</button>
				))}
			</div>
		</div>
	);
};

export default ReportVariableSelector;
