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

const ServiceProviderStatsChart: React.FC<Props> = ({ data, activeValue, onBarClick }) => {
	const handleClick = (entry: AggregatedMetric) => {
		if (onBarClick) {
			onBarClick('providers', entry.label);
		}
	};

	if (data.length === 0) {
		return <div className="chart-empty">No provider data available</div>;
	}

	return (
		<ResponsiveContainer width="100%" height={220}>
			<BarChart
				data={data}
				layout="vertical"
				margin={{ top: 5, right: 30, left: 90, bottom: 5 }}
			>
				<XAxis type="number" tick={{ fontSize: 12 }} />
				<YAxis
					dataKey="label"
					type="category"
					width={85}
					tick={{ fontSize: 10 }}
					tickFormatter={(value) => value.length > 14 ? value.substring(0, 12) + '...' : value}
				/>
				<Tooltip
					formatter={(value, name, props) => [
						`${value} providers (${props.payload?.percentage ?? 0}%)`,
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
							fill={entry.color || '#14b8a6'}
							opacity={activeValue && entry.label !== activeValue ? 0.4 : 1}
						/>
					))}
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default ServiceProviderStatsChart;
