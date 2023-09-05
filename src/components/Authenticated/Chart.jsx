import React, { useState, useContext, useEffect } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Card from "./Card";
import { mockHistoricalData } from "../../constants";
import { chartConfig } from "../../constants/config";
import ChartFilter from "./ChartFilter";
import ThemeContext from "../../context/ThemeContext";
import { convertDateToUnixTimestamp, convertUnixTimestampToDate, createDate } from "../../helpers/date-helper";
import { fetchHistoricalData } from "../../api/stock-api";
import StockContext from "../../context/StockContext";
import Chart from "react-apexcharts";

const StockChart = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("1W");
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);

  const toolbar = {
    show: false,
  };

  const plotOptions = {
    candlestick: {
      colors: {
        upward: '#3C90EB',
        downward: '#DF7D46'
      }
    }
  };

  const formatData = (data) => {
    const t = data.t;
    const o = data.o;
    const h = data.h;
    const l = data.l;
    const c = data.c;
    let d = [];

    for (var i=0; i<t.length; i++) {
      d.push([t[i], [o[i], h[i], l[i], c[i]]]);
    }

    return [{
      data: d
    }];

  }

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];
      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);

      const startUnixTimestamp = convertDateToUnixTimestamp(startDate);
      const endUnixTimestamp = convertDateToUnixTimestamp(endDate);

      return { startUnixTimestamp, endUnixTimestamp };
    };

    const updateChartData = async () => {
      try {
        const { startUnixTimestamp, endUnixTimestamp } = getDateRange();
        const resolution = chartConfig[filter].resolution;
        const result = await fetchHistoricalData(stockSymbol, resolution, startUnixTimestamp, endUnixTimestamp);
        const d = formatData(result);
        
        setData(d);
      } catch(error) {
        setData([]);
        console.log(error);
      }
    };

    updateChartData();

  }, [stockSymbol, filter]);

  return (
    <>
      <Card>
        <ul className="flex absolute top-2 right-2 z-40">
          {Object.keys(chartConfig).map((item) => {
            return (
              <li key={item}>
                <ChartFilter text={item} active={filter === item} onClick={() => { setFilter(item) }} />
              </li>
            );
          })}
        </ul>
        <Chart
          toolbar={toolbar}
          options={plotOptions}
          series={data}
          type="candlestick"
          width="100%"
        />
        {/* <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={darkMode ? "#312E81" : "rgb(199 210 254)"} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={darkMode ? "#312E81" : "rgb(199 210 254)"} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#312E81" 
              fillOpacity={1} 
              strokeWidth={0.5}
              fill="url(#chartColor)"
            />
            <Tooltip 
              contentStyle={darkMode ? { backgroundColor: "#111827" } : null} 
              itemStyle={darkMode ? {color: "#818CF8"} : null}
            />
            <XAxis dataKey={"date"} />
            <YAxis domain={["dataMin", "dataMax"]} />
          </AreaChart>
        </ResponsiveContainer> */}
      </Card>
    </>
  );
};

export default StockChart;