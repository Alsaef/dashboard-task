'use client'
import AnimatedHeader from '@/components/AnimationHeader';
import ErrorBox from '@/components/ErrorBox';
import Loading from '@/components/Loading';
import UserCard from '@/components/UserCard';
import useFetch from '@/hooks/useFetch';
import { User } from '@/types/tyoe';
import React from 'react';

const page = () => {
     const { data, loading, error } = useFetch<User[]|null>('https://jsonplaceholder.typicode.com/users')

    if (loading) {
        return  <div className="min-h-screen flex items-center justify-center">
        <Loading></Loading>
      </div>
    }

    if (error) {
        return <ErrorBox message={error}></ErrorBox>
    }

    if (!data) {
  return <ErrorBox message="No users found" />;
}


    return (
        <div>
             <AnimatedHeader title='Welcome to Users Page'></AnimatedHeader>
                         <div  className='grid grid-cols-3 gap-3 my-6'>
                {
                    data.map(user => (
                    <UserCard key={user.id} user={user} />
                    ))
                }
            </div>
        </div>
    );
};

export default page;