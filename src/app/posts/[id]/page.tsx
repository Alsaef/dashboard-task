"use client";

import { Post } from '@/types/tyoe';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { FaPinterest, FaUser } from 'react-icons/fa';
import { IoPinSharp } from 'react-icons/io5';
import Loading from '@/components/Loading';

interface ParamsProps {
  params: {
    id: number;
  };
}

const Page = ({ params }: ParamsProps) => {
  const { id } = params;
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading></Loading>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">Post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {data.title}
        </h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          {data.body}
        </p>

        <div className="flex items-center justify-between border-t pt-4 text-sm text-gray-500">
          <span className='flex items-center gap-2'><IoPinSharp /> Post ID: {data.id}</span>
          <span className='flex items-center gap-2'><FaUser/> User ID: {data.userId}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
