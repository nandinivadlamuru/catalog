import React from 'react';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ComposedChart } from "recharts";
import './Chart.css';

// Sample data - replace with actual data points
const data = [
    { 'date': '2024-01', 'value': 5000, 'volume': 897 },
    { 'date': '2024-02', 'value': 3754, 'volume': 1066 },
    { 'date': '2024-03', 'value': 4530, 'volume': 701 },
    { 'date': '2024-04', 'value': 8530, 'volume': 1083 },
    { 'date': '2024-05', 'value': 7917, 'volume': 778 },
    { 'date': '2024-06', 'value': 9728, 'volume': 907 },
    { 'date': '2024-07', 'value': 2628, 'volume': 818 },
    { 'date': '2024-08', 'value': 3477, 'volume': 1296 },
    { 'date': '2024-09', 'value': 3134, 'volume': 1269 },
    { 'date': '2024-10', 'value': 4755, 'volume': 916 },
    { 'date': '2024-11', 'value': 4395, 'volume': 973 },
    { 'date': '2024-12', 'value': 3210, 'volume': 364 },
    { 'date': '2025-01', 'value': 3735, 'volume': 1045 },
    { 'date': '2025-02', 'value': 4754, 'volume': 910 },
    { 'date': '2025-03', 'value': 3563, 'volume': 829 },
    { 'date': '2025-04', 'value': 9225, 'volume': 100 },
    { 'date': '2025-05', 'value': 3581, 'volume': 777 },
    { 'date': '2025-06', 'value': 3967, 'volume': 1063 },
    { 'date': '2025-07', 'value': 3655, 'volume': 894 },
    { 'date': '2025-08', 'value': 9250, 'volume': 364 },
    { 'date': '2025-09', 'value': 4273, 'volume': 882 },
    { 'date': '2025-10', 'value': 4622, 'volume': 706 },
    { 'date': '2025-11', 'value': 4197, 'volume': 1075 },
    { 'date': '2025-12', 'value': 3608, 'volume': 774 },
    { 'date': '2026-01', 'value': 2156, 'volume': 1177 },
    { 'date': '2026-02', 'value': 3698, 'volume': 707 },
    { 'date': '2026-03', 'value': 2775, 'volume': 781 },
    { 'date': '2026-04', 'value': 2218, 'volume': 1123 },
    { 'date': '2026-05', 'value': 3081, 'volume': 803 },
    { 'date': '2026-06', 'value': 2121, 'volume': 1052 },
    { 'date': '2026-07', 'value': 4614, 'volume': 1228 },
    { 'date': '2026-08', 'value': 5306, 'volume': 104 },
    { 'date': '2026-09', 'value': 4728, 'volume': 1031 },
    { 'date': '2026-10', 'value': 3980, 'volume': 778 },
    { 'date': '2026-11', 'value': 4022, 'volume': 804 },
    { 'date': '2026-12', 'value': 4557, 'volume': 285 },
    { 'date': '2027-01', 'value': 2143, 'volume': 1111 },
    { 'date': '2027-02', 'value': 2259, 'volume': 982 },
    { 'date': '2027-03', 'value': 4091, 'volume': 862 },
    { 'date': '2027-04', 'value': 2575, 'volume': 748 },
    { 'date': '2027-05', 'value': 4542, 'volume': 951 },
    { 'date': '2027-06', 'value': 2031, 'volume': 1014 },
    { 'date': '2027-07', 'value': 2430, 'volume': 950 },
    { 'date': '2027-08', 'value': 4089, 'volume': 848 },
    { 'date': '2027-09', 'value': 3755, 'volume': 1258 },
    { 'date': '2027-10', 'value': 4105, 'volume': 1259 },
    { 'date': '2027-11', 'value': 4292, 'volume': 719 },
    { 'date': '2027-12', 'value': 4375, 'volume': 974 },
    { 'date': '2028-01', 'value': 3585, 'volume': 1241 },
    { 'date': '2028-02', 'value': 4904, 'volume': 1233 },
    { 'date': '2028-03', 'value': 3674, 'volume': 1031 },
    { 'date': '2028-04', 'value': 3230, 'volume': 1013 },
    { 'date': '2028-05', 'value': 2450, 'volume': 974 },
    { 'date': '2028-06', 'value': 2592, 'volume': 1244 },
    { 'date': '2028-07', 'value': 2284, 'volume': 874 },
    { 'date': '2028-08', 'value': 4814, 'volume': 711 },
    { 'date': '2028-09', 'value': 2662, 'volume': 1095 },
    { 'date': '2028-10', 'value': 3250, 'volume': 1061 },
    { 'date': '2028-11', 'value': 2821, 'volume': 1160 },
    { 'date': '2028-12', 'value': 4377, 'volume': 1161 },
    { 'date': '2029-01', 'value': 3837, 'volume': 1147 },
    { 'date': '2029-02', 'value': 3151, 'volume': 972 },
    { 'date': '2029-03', 'value': 2207, 'volume': 1006 },
    { 'date': '2029-04', 'value': 4690, 'volume': 1034 },
    { 'date': '2029-05', 'value': 4554, 'volume': 1188 },
    { 'date': '2029-06', 'value': 4953, 'volume': 1027 },
    { 'date': '2029-07', 'value': 3252, 'volume': 873 },
    { 'date': '2029-08', 'value': 9401, 'volume': 2223 },
    { 'date': '2029-09', 'value': 2903, 'volume': 1041 },
    { 'date': '2029-10', 'value': 4989, 'volume': 777 },
    { 'date': '2029-11', 'value': 4903, 'volume': 1070 },
    { 'date': '2029-12', 'value': 2699, 'volume': 1096 },
    { 'date': '2030-01', 'value': 2888, 'volume': 1152 },
    { 'date': '2030-02', 'value': 4915, 'volume': 805 },
    { 'date': '2030-03', 'value': 9145, 'volume': 167 },
    { 'date': '2030-04', 'value': 2923, 'volume': 968 },
    { 'date': '2030-05', 'value': 4574, 'volume': 798 },
    { 'date': '2030-06', 'value': 4672, 'volume': 1140 },
    { 'date': '2030-07', 'value': 3879, 'volume': 1205 },
    { 'date': '2030-08', 'value': 3913, 'volume': 763 },
    { 'date': '2030-09', 'value': 2616, 'volume': 1053 },
    { 'date': '2030-10', 'value': 2998, 'volume': 745 },
    { 'date': '2030-11', 'value': 3151, 'volume': 807 },
    { 'date': '2030-12', 'value': 4177, 'volume': 771 },
    { 'date': '2031-01', 'value': 728, 'volume': 2381 },
    { 'date': '2031-02', 'value': 2753, 'volume': 1005 },
    { 'date': '2031-03', 'value': 2069, 'volume': 1113 },
    { 'date': '2031-04', 'value': 2192, 'volume': 764 },
    { 'date': '2031-05', 'value': 2289, 'volume': 1217 },
    { 'date': '2031-06', 'value': 3826, 'volume': 947 },
    { 'date': '2031-07', 'value': 3295, 'volume': 2340 },
    { 'date': '2031-08', 'value': 3353, 'volume': 713 },
    { 'date': '2031-09', 'value': 4962, 'volume': 1202 },
    { 'date': '2031-10', 'value': 4160, 'volume': 718 },
    { 'date': '2031-11', 'value': 2000, 'volume': 1280 },
    { 'date': '2031-12', 'value': 2561, 'volume': 856 },
    { 'date': '2032-01', 'value': 2530, 'volume': 907 },
].map(item => ({
    ...item,
    tooltipValue: item.value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}));

export default function FinancialChart() {
    const currentValue = "63,179.71";
    const highValue = "64,850.35";

    return (
        <div className="financial-chart-container">
            <div className="financial-chart-content">
                <div className="financial-chart-header">
                    <div className="financial-chart-badge-container">
                        <span className="financial-chart-badge financial-chart-badge-high">
                            {highValue}
                        </span>
                        <span className="financial-chart-badge financial-chart-badge-current">
                            {currentValue}
                        </span>
                    </div>
                </div>

                <div className="financial-chart">
                    <ComposedChart
                        width={819}
                        height={343}
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#E2E8F0"
                        />
                        <Tooltip
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="financial-chart-tooltip">
                                            <p className="financial-chart-tooltip-text">
                                                {payload[0].payload.tooltipValue}
                                            </p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Bar
                            dataKey="volume"
                            fill="#E2E8F0"
                            width={700}
                            barSize={30}
                            radius={[10, 10, 0, 0]}
                            isAnimationActive={false}
                        />

                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#7C3AED"
                            strokeWidth={2}
                            dot={false}
                            isAnimationActive={false}
                            fill="url(#colorValue)"
                        />
                    </ComposedChart>
                </div>
            </div>
        </div>
    );
}