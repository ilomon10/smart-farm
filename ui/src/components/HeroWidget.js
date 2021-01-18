import React, { useState } from "react";
import { AreaChart, Area, Tooltip } from "recharts";

const HeroWidget = ({ width, height }) => {
  const name = "Hero"
  const [data] = useState([{
    name: name,
    uv: 250
  }, {
    name: name,
    uv: 500
  }, {
    name: name,
    uv: 350
  }, {
    name: name,
    uv: 400
  }, {
    name: name,
    uv: 250
  }])
  return (
    <AreaChart
      height={height || 50}
      width={width || 50}
      data={data}
      margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="10%" stopColor="#11181f" stopOpacity={1} />
          <stop offset="90%" stopColor="#2c3e50" stopOpacity={1} />
        </linearGradient>
      </defs>
      <Tooltip />
      <Area
        isAnimationActive={false}
        type="monotone" dataKey="uv" stroke="#34495e" strokeWidth={8} fillOpacity={1} fill="url(#colorUv)" />
    </AreaChart>
  )
}

export default HeroWidget;