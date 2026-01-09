import React from 'react';
import { ReportSection as ReportSectionType } from '../types';
import ReportChart from './ReportChart';

interface ReportSectionProps {
	section: ReportSectionType;
}

const ReportSection: React.FC<ReportSectionProps> = ({ section }) => {
	const { title, content, statistics, charts, highlights } = section;

	return (
		<div className="report-section">
			<h3 className="report-section__title">{title}</h3>

			{content && (
				<p className="report-section__content">{content}</p>
			)}

			{statistics.length > 0 && (
				<div className="report-section__stats">
					{statistics.map((stat, index) => (
						<div key={index} className="stat-card">
							<div className="stat-card__value">
								{typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
							</div>
							<div className="stat-card__label">{stat.label}</div>
							{stat.context && (
								<div className="stat-card__context">{stat.context}</div>
							)}
						</div>
					))}
				</div>
			)}

			{charts.length > 0 && (
				<div className="report-section__charts">
					{charts.map((chart, index) => (
						<ReportChart key={index} chart={chart} />
					))}
				</div>
			)}

			{highlights.length > 0 && (
				<div className="report-section__highlights">
					<ul>
						{highlights.map((highlight, index) => (
							<li key={index}>{highlight}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default ReportSection;
