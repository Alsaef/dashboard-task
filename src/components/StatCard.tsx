"use client";
import React from 'react';


import { motion } from "framer-motion";

interface StatCardProps {
    title: string;
    value: string | number;
}

const StatCard = ({title,value}:StatCardProps) => {
    return (
        <div>
            <motion.div
                className="bg-white shadow-md rounded-xl p-6 text-center cursor-pointer border border-gray-100"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
            >
                <h3 className="text-gray-500 text-sm">{title}</h3>
                <p className="text-3xl font-bold text-blue-600">{value}</p>
            </motion.div>

        </div>
    );
};

export default StatCard;