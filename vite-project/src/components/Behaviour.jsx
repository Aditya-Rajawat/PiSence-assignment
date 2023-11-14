import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Behaviour = () => {
    const data = [
        { name: 'Group A', value: 795 },
        { name: 'Group B', value: 392 }
      ];
      
      const COLORS = ['#b91c1c', '#22c55e'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

  return (
    <div className="w-3/5 mt-7 h-60 bg-gray-300 rounded-lg ">
      <p className="text-2xl font-medium text-center pt-4">
        Behaviour Analytics
      </p>

    
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400} className="absolute bottom-5">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            label
            outerRadius={70}
            fill="#8884d8"
            dataKey="value"
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      
    <div className="absolute top-[630px] right-[220px]">
        {/* Good */}
        <div className="flex items-center gap-2 font-medium">
            <div className="w-3 h-3 bg-green-500"></div>
            <p>GOOD</p>
        </div>
        {/* Bad */}
        <div className="flex items-center gap-2 font-medium">
            <div className="w-3 h-3 bg-red-700"></div>
            <p>BAD</p>
        </div>
    </div>

    </div>
  );
};

export default Behaviour;
