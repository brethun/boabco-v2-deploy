import React from 'react';
import './ChartCard.css';

interface ChartCardProps {
	title: string;
	chartId: string;
	children: React.ReactNode;
	isActive?: boolean;
	loading?: boolean;
	className?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({
	title,
	chartId,
	children,
	isActive = false,
	loading = false,
	className = ''
}) => {
	return (
		<div
			className={`chart-card ${isActive ? 'chart-card--active' : ''} ${className}`}
			data-chart-id={chartId}
		>
			<div className="chart-card__header">
				<h3 className="chart-card__title">{title}</h3>
				{isActive && (
					<span className="chart-card__active-badge">Filtered</span>
				)}
			</div>
			<div className="chart-card__body">
				{loading ? (
					<div className="chart-card__loading">
						<div className="chart-card__loading-spinner"></div>
						<span>Loading...</span>
					</div>
				) : (
					children
				)}
			</div>
		</div>
	);
};

export default ChartCard;
