
import AnimatedHeader from '@/components/AnimationHeader';
import Chart from '@/components/Chart';
import StatCard from '@/components/StatCard';


import React from 'react';


const page = () => {
  return (
    <div>
       <AnimatedHeader title='Welcome to Your Dashboard'></AnimatedHeader>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto my-10">
        <StatCard title="Total Posts" value={120} />
        <StatCard title="Total Users" value={50} />
        <StatCard title="Active Sessions" value={12} />
      </div>

<Chart></Chart>


    </div>
  );
};

export default page;