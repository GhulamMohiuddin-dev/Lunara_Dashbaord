import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setChartData } from "../state/dashboardSlice";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import chartDataTimeline from "../dummyData/dataTimeLine.json";

import {
  Bar,
  Line,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";

const CustomChart = () => {
  const dispatch = useDispatch();
  const [chartsData, setChartsData] = useState(
    chartDataTimeline.timeline[0].chartData
  );
  useEffect(() => {
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep = (currentStep + 1) % chartDataTimeline.timeline.length;
      setChartsData(chartDataTimeline.timeline[currentStep].chartData);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    dispatch(setChartData(chartsData));
  }, [chartsData]);
  const renderLegendText = (value: any) => {
    return <span style={{ color: "#9B9B9B" }}>{value}</span>;
  };
  const data = useSelector((state: RootState) => state.dashboard.chartData);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="name" tick={{ fill: "#5F5F5F" }} />
        <YAxis
          tick={{ fill: "#5F5F5F" }}
          tickFormatter={(value) => `${value}K`}
        />
        <Legend
          layout="horizontal"
          align="right"
          verticalAlign="top"
          iconType="circle"
          iconSize={6}
          formatter={renderLegendText}
          wrapperStyle={{
            color: "#9B9B9B",
            paddingRight: "20px",
            paddingBottom: "50px",
            fontSize: "12px",
          }}
        />
        <Bar dataKey="Balance" barSize={15} fill="#0046FF" />
        <Bar dataKey="Cost" barSize={15} fill="#F03EFF" />
        <Bar dataKey="Revenue" barSize={15} fill="#9DE7FF" />
        <Line
          type="monotone"
          dataKey="Gross_Profit"
          stroke="#FEC84B"
          strokeWidth={2}
          dot={{
            fill: "#0046FF",
            stroke: "#E6E6E6",
            strokeWidth: 3,
          }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CustomChart;
