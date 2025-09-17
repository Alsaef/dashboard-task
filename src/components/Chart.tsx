"use client";

import React from "react";
import { motion } from "framer-motion";
const chartData = [
  { title: "Jan", value: 40 },
  { title: "Feb", value: 70 },
  { title: "Mar", value: 90 },
  { title: "Apr", value: 50 },
  { title: "May", value: 30 },
  { title: "Jun", value: 80 },
  { title: "Jul", value: 30 },
  { title: "Aug", value: 70 },
  { title: "Sep", value: 90 },
  { title: "Oct", value: 40 },
];

const Chart = () => {
  return (
    <div className="mt-6">
      <div className="flex gap-3 items-end h-48 justify-center">
        {chartData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-blue-500 rounded w-8 relative flex flex-col justify-end"
            initial={{ height: 0 }}
            animate={{ height: `${item.value}%` }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            
            <p className="text-white text-xs text-center mb-1">{item.value}</p>
           
            <p className="absolute -bottom-6 w-full text-center text-gray-600 text-sm">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
