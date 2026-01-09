import React from 'react';
import {
	PieChart,
	Pie,
	Cell,
	Tooltip,
	ResponsiveContainer,
	Legend
} from 'recharts';
import { AggregatedMetric, ChartClickHandler } from '../../types';

interface Props {
	data: AggregatedMetric[];
	activeValue?: string;
	onSliceClick?: ChartClickHandler;
}

const EngagementStatusChart: React.FC<Props> = ({ data, activeValue, onSliceClick }) => {
	const handleClick = (entry: AggregatedMetric) => {
		if (onSliceClick) {
			onSliceClick('engagement', entry.label);
		}
	};

	if (data.length === 0) {
		return <div className="chart-empty">No engagement data available</div>;
	}

	const total = data.reduce((sum, d) => sum + d.value, 0);

	return (
		<ResponsiveContainer width="100%" height={280}>
			<PieChart>
				<Pie
					data={data}
					cx="50%"
					cy="50%"
					innerRadius={55}
					outerRadius={85}
					paddingAngle={2}
					dataKey="value"
					onClick={(data) => handleClick(data)}
					cursor="pointer"
				>
					{data.map((entry) => (
						<Cell
							key={entry.label}
							fill={entry.color || '#6366f1'}
							opacity={activeValue && entry.label !== activeValue ? 0.4 : 1}
							stroke="#fff"
							strokeWidth={2}
						/>
					))}
				</Pie>
				<text
					x="50%"
					y="50%"
					textAnchor="middle"
					dominantBaseline="middle"
					style={{ fontSize: 24, fontWeight: 600, fill: '#374151' }}
				>
					{total}
				</text>
				<text
					x="50%"
					y="58%"
					textAnchor="middle"
					dominantBaseline="middle"
					style={{ fontSize: 11, fill: '#6b7280' }}
				>
					Total
				</text>
				<Tooltip
					formatter={(value, name, props) => [
						`${value} people (${props.payload?.percentage ?? 0}%)`,
						props.payload?.label
					]}
					contentStyle={{ fontSize: 12 }}
				/>
				<Legend
					verticalAlign="bottom"
					height={36}
					formatter={(value, entry: any) => (
						<span style={{ fontSize: 12, color: '#374151' }}>
							{entry.payload.label}
						</span>
					)}
				/>
			</PieChart>
		</ResponsiveContainer>
	);
};

export default EngagementStatusChart;
