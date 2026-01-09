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

const CommunityBreakdownChart: React.FC<Props> = ({ data, activeValue, onSliceClick }) => {
	const handleClick = (entry: AggregatedMetric) => {
		if (onSliceClick) {
			onSliceClick('community', entry.label);
		}
	};

	if (data.length === 0) {
		return <div className="chart-empty">No community data available</div>;
	}

	return (
		<ResponsiveContainer width="100%" height={280}>
			<PieChart>
				<Pie
					data={data}
					cx="50%"
					cy="50%"
					outerRadius={85}
					paddingAngle={1}
					dataKey="value"
					onClick={(data: any) => handleClick(data)}
					cursor="pointer"
					label={({ percent }) => `${((percent ?? 0) * 100).toFixed(0)}%`}
					labelLine={false}
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
						<span style={{ fontSize: 11, color: '#374151' }}>
							{entry.payload.label}
						</span>
					)}
				/>
			</PieChart>
		</ResponsiveContainer>
	);
};

export default CommunityBreakdownChart;
