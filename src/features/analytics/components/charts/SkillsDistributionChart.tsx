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

const SkillsDistributionChart: React.FC<Props> = ({ data, activeValue, onBarClick }) => {
	const handleClick = (entry: AggregatedMetric) => {
		if (onBarClick) {
			onBarClick('skills', entry.label);
		}
	};

	if (data.length === 0) {
		return <div className="chart-empty">No skills data available</div>;
	}

	return (
		<ResponsiveContainer width="100%" height={280}>
			<BarChart
				data={data}
				layout="vertical"
				margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
			>
				<XAxis type="number" tick={{ fontSize: 12 }} />
				<YAxis
					dataKey="label"
					type="category"
					width={75}
					tick={{ fontSize: 11 }}
					tickFormatter={(value) => value.length > 12 ? value.substring(0, 10) + '...' : value}
				/>
				<Tooltip
					formatter={(value, name, props) => [
						`${value} people (${props.payload?.percentage ?? 0}%)`,
						'Count'
					]}
					contentStyle={{ fontSize: 12 }}
				/>
				<Bar
					dataKey="value"
					cursor="pointer"
					onClick={(data: any) => handleClick(data)}
					radius={[0, 4, 4, 0]}
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

export default SkillsDistributionChart;
