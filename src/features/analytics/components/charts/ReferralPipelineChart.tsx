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

const ReferralPipelineChart: React.FC<Props> = ({ data, activeValue, onBarClick }) => {
	const handleClick = (entry: AggregatedMetric) => {
		if (onBarClick) {
			onBarClick('referrals', entry.label);
		}
	};

	if (data.length === 0) {
		return <div className="chart-empty">No referral data available</div>;
	}

	return (
		<ResponsiveContainer width="100%" height={220}>
			<BarChart
				data={data}
				layout="vertical"
				margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
			>
				<XAxis type="number" tick={{ fontSize: 12 }} />
				<YAxis
					dataKey="label"
					type="category"
					width={95}
					tick={{ fontSize: 11 }}
				/>
				<Tooltip
					formatter={(value, name, props) => [
						`${value} referrals (${props.payload?.percentage ?? 0}%)`,
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

export default ReferralPipelineChart;
