'use client'
import AnimatedHeader from '@/components/AnimationHeader';
import ErrorBox from '@/components/ErrorBox';
import Loading from '@/components/Loading';
import UserCard from '@/components/UserCard';
import useFetch from '@/hooks/useFetch';
import { User } from '@/types/tyoe';
import React from 'react';

const UsersPage = () => {
  const { data, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <ErrorBox message={error} />;
  }

if (!data || data.length === 0) {
    return <ErrorBox message="No posts found" />;
}


  return (
    <div>
      <AnimatedHeader title="Welcome to Users Page" />
      <div className="grid grid-cols-3 gap-3 my-6">
        {data.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
