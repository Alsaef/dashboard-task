'use client'
import AnimatedHeader from '@/components/AnimationHeader';
import Card from '@/components/Card';
import ErrorBox from '@/components/ErrorBox';
import Loading from '@/components/Loading';
import useFetch from '@/hooks/useFetch';
import { Post } from '@/types/tyoe';
import React from 'react';

const page = () => {


    const { data, loading, error } = useFetch<Post[] | null>('https://jsonplaceholder.typicode.com/posts')

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">
            <Loading></Loading>
        </div>
    }

    if (error) {
        return <ErrorBox message={error}></ErrorBox>
    }

    if (!data) {
        return <ErrorBox message="No users found" />;
    }

    console.log(data);
    return (
        <div>
            <AnimatedHeader title='Welcome to Posts Page'></AnimatedHeader>

            <div className='grid grid-cols-3 gap-3 my-6'>
                {
                    data.map(post => (
                        <Card
                            key={post.id}
                            title={post.title}
                            value={post.id}
                            description={post.body}
                            color="blue"
                        ></Card>
                    ))
                }
            </div>
        </div>
    );
};

export default page;