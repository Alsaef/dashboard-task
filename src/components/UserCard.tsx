'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { FaHospitalAlt } from "react-icons/fa";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  company: { name: string };
}

const UserCard = ({ user }: { user: User }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white shadow-md rounded-2xl p-6 border border-gray-200"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-1">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>
      <p className="text-sm text-gray-500">{user.email}</p>
      <p className="text-sm text-gray-500 mt-2 flex items-center gap-2"><FaHospitalAlt />
 {user.company.name}</p>

      <div className="mt-4">
        <Link
          href={`/users/${user.id}`}
          className="text-blue-600 font-medium hover:underline"
        >
          View Profile →
        </Link>
      </div>
    </motion.div>
  );
};

export default UserCard;
