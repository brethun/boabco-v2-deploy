import React from 'react';
import {
	PieChart,
	Pie,
	Cell,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Legend
} from 'recharts';
import { ReportChartData } from '../types';

interface ReportChartProps {
	chart: ReportChartData;
}

const COLORS = ['#E2592A', '#FAB819', '#482B12', '#f06d42', '#ffc94d', '#6b4520', '#c74a22', '#d99f00'];

const ReportChart: React.FC<ReportChartProps> = ({ chart }) => {
	const { type, title, data } = chart;

	if (data.length === 0) {
		return (
			<div className="report-chart report-chart--empty">
				<p>No data available for this chart</p>
			</div>
		);
	}

	const dataWithColors = data.map((item, index) => ({
		...item,
		color: item.color || COLORS[index % COLORS.length]
	}));

	const renderPieChart = () => (
		<ResponsiveContainer width="100%" height={280}>
			<PieChart>
				<Pie
					data={dataWithColors}
					cx="50%"
					cy="50%"
					outerRadius={100}
					innerRadius={50}
					dataKey="value"
					nameKey="label"
					label={({ payload }) => `${payload.label}: ${payload.percentage}%`}
					labelLine={{ stroke: '#9a8a7c', strokeWidth: 1 }}
				>
					{dataWithColors.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={entry.color} />
					))}
				</Pie>
				<Tooltip
					formatter={(value, name, props) => [
						`${value} (${props.payload?.percentage ?? 0}%)`,
						props.payload?.label
					]}
					contentStyle={{
						background: '#fff',
						border: '1px solid #e8dfd6',
						borderRadius: '8px',
						boxShadow: '0 2px 8px rgba(72, 43, 18, 0.1)'
					}}
				/>
				<Legend
					verticalAlign="bottom"
					height={36}
					formatter={(value) => <span style={{ color: '#482B12' }}>{value}</span>}
				/>
			</PieChart>
		</ResponsiveContainer>
	);

	const renderBarChart = () => (
		<ResponsiveContainer width="100%" height={280}>
			<BarChart
				data={dataWithColors}
				layout="vertical"
				margin={{ top: 10, right: 30, left: 100, bottom: 10 }}
			>
				<XAxis type="number" tick={{ fill: '#6b5849', fontSize: 12 }} />
				<YAxis
					type="category"
					dataKey="label"
					tick={{ fill: '#482B12', fontSize: 12 }}
					width={90}
				/>
				<Tooltip
					formatter={(value, name, props) => [
						`${value} (${props.payload?.percentage ?? 0}%)`,
						'Count'
					]}
					contentStyle={{
						background: '#fff',
						border: '1px solid #e8dfd6',
						borderRadius: '8px',
						boxShadow: '0 2px 8px rgba(72, 43, 18, 0.1)'
					}}
				/>
				<Bar dataKey="value" radius={[0, 4, 4, 0]}>
					{dataWithColors.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={entry.color} />
					))}
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);

	return (
		<div className="report-chart">
			{title && <h4 className="report-chart__title">{title}</h4>}
			{type === 'pie' && renderPieChart()}
			{(type === 'bar' || type === 'horizontal-bar') && renderBarChart()}
		</div>
	);
};

export default ReportChart;
