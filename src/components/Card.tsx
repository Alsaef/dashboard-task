import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { FaFlag, FaUser } from 'react-icons/fa';
interface StatCardProps {
    title: string;
    value: string | number;
    description?: string;
    color?: string;
}



const Card = ({ title, value, description, color = "blue"}: StatCardProps) => {

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-4 bg-white shadow-md rounded-2xl p-5 border-t-4 border-${color}-500 h-full`}
            >
              
                <div>
                      <div className={`p-3 rounded-xl bg-${color}-100`}>
                  <FaFlag className={`w-8 h-8 text-${color}-600`} />
                </div>
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <p className="text-2xl font-bold text-gray-900">{value}</p>
                    {description && <p className="text-sm text-gray-500">{description}</p>}

                   <Link href={`/posts/${value}`}>View Details</Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Card;