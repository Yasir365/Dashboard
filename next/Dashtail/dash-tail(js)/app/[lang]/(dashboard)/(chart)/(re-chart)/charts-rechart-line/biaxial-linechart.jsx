"use client";
import { useThemeStore } from "@/store";
import { useTheme } from "next-themes";
import { themes } from "@/config/themes";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CustomTooltip from "./custom-tooltip";

const BiAxialLineChart = ({ height = 300 }) => {
  const { theme: config, setTheme: setConfig, isRtl } = useThemeStore();
  const { theme: mode } = useTheme();
  const theme = themes.find((theme) => theme.name === config);
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer height={height}>
      <LineChart width={"100%"} height={height} data={data}>
        <CartesianGrid
          stroke={`hsl(${
            theme?.cssVars[
              mode === "dark" || mode === "system" ? "dark" : "light"
            ].chartGird
          })`}
          strokeDasharray="1 1"
          vertical={false}
        />
        <XAxis
          tick={{
            fill: mode === "dark" ? "#cbd5e1" : "#64748b",
            fontSize: "12px",
          }}
          tickLine={false}
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
          })`}
          dataKey="name"
        />

        <YAxis
          tick={{
            fill: mode === "dark" ? "#cbd5e1" : "#64748b",
            fontSize: "12px",
          }}
          tickLine={false}
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
          })`}
          yAxisId="left"
        />
        <YAxis
          tick={{
            fill: mode === "dark" ? "#cbd5e1" : "#64748b",
            fontSize: "12px",
          }}
          tickLine={false}
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].chartGird
          })`}
          yAxisId="right"
          orientation="right"
        />
        <Legend
          formatter={(value, entry) => (
            <span
              style={{ color: entry.color, marginRight: isRtl ? "5px" : "0px" }}
            >
              {value}
            </span>
          )}
        />
        <Tooltip content={CustomTooltip} />
        <Line
          type="monotone"
          yAxisId="left"
          dataKey="pv"
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].success
          })`}
          strokeDasharray="5 5"
        />
        <Line
          type="monotone"
          dataKey="uv"
          yAxisId="right"
          stroke={`hsl(${
            theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
          })`}
          strokeDasharray="3 4 5 2"
          dot={{
            stroke: `hsl(${
              theme?.cssVars[mode === "dark" ? "dark" : "light"].warning
            })`,
            strokeWidth: 2,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BiAxialLineChart;
