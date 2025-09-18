'use client'

import React, { useState } from 'react';
import useFetch from '@/hooks/useFetch';
import { User } from '@/types/tyoe';
import Loading from '@/components/Loading';
import ErrorBox from '@/components/ErrorBox';
import { motion, AnimatePresence } from 'framer-motion';
import UserModal from '@/components/UserModal';

const UsersPage = () => {
  const { data: users, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) return <Loading />;
  if (error) return <ErrorBox message={error} />;
  if (!users || users.length === 0) return <ErrorBox message="No users found" />;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedUser(user)}
              >
                <td className="px-4 py-2 border">{user.name}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* Modal */}
     <UserModal user={selectedUser} onClose={() => setSelectedUser(null)}></UserModal>
    </div>
  );
};

export default UsersPage;
