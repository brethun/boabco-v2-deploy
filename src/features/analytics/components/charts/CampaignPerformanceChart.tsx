import React from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Cell
} from 'recharts';
import { AggregatedMetric, ChartClickHandler } from '../../types';

interface Props {
	data: AggregatedMetric[];
	activeValue?: string;
	onBarClick?: ChartClickHandler;
}

const CampaignPerformanceChart: React.FC<Props> = ({ data, activeValue, onBarClick }) => {
	const handleClick = (entry: AggregatedMetric) => {
		if (onBarClick) {
			onBarClick('campaigns', entry.label);
		}
	};

	if (data.length === 0) {
		return <div className="chart-empty">No campaign data available</div>;
	}

	return (
		<ResponsiveContainer width="100%" height={220}>
			<BarChart
				data={data}
				margin={{ top: 5, right: 20, left: 10, bottom: 60 }}
			>
				<XAxis
					dataKey="label"
					tick={{ fontSize: 9 }}
					angle={-45}
					textAnchor="end"
					interval={0}
					height={60}
				/>
				<YAxis tick={{ fontSize: 12 }} />
				<Tooltip
					formatter={(value) => [`${value} responses`, 'Responses']}
					contentStyle={{ fontSize: 12 }}
				/>
				<Bar
					dataKey="value"
					cursor="pointer"
					onClick={(data: any) => handleClick(data)}
					radius={[4, 4, 0, 0]}
				>
					{data.map((entry) => (
						<Cell
							key={entry.label}
							fill={entry.color || '#6366f1'}
							opacity={activeValue && entry.label !== activeValue ? 0.4 : 1}
						/>
					))}
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default CampaignPerformanceChart;
