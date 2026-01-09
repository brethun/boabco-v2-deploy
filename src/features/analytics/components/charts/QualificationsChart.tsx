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

const QualificationsChart: React.FC<Props> = ({ data, activeValue, onBarClick }) => {
	const handleClick = (entry: AggregatedMetric) => {
		if (onBarClick) {
			onBarClick('qualifications', entry.label);
		}
	};

	if (data.length === 0) {
		return <div className="chart-empty">No qualification data available</div>;
	}

	return (
		<ResponsiveContainer width="100%" height={280}>
			<BarChart
				data={data}
				margin={{ top: 5, right: 20, left: 10, bottom: 60 }}
			>
				<XAxis
					dataKey="label"
					tick={{ fontSize: 10 }}
					angle={-45}
					textAnchor="end"
					interval={0}
					height={60}
				/>
				<YAxis tick={{ fontSize: 12 }} />
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
					radius={[4, 4, 0, 0]}
				>
					{data.map((entry) => (
						<Cell
							key={entry.label}
							fill={entry.color || '#8b5cf6'}
							opacity={activeValue && entry.label !== activeValue ? 0.4 : 1}
						/>
					))}
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default QualificationsChart;
