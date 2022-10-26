import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Enroll = () => {
    const course = useLoaderData();
    // console.log(course);
    return (
        <div>
            <div className='bg-gray-700 dark:bg-gray-200 p-12 m-12 rounded-md text-white dark:text-black'>
                <h1 className='text-4xl'>Congratulations! Now You have access of '<span className='font-bold'>{course.name}</span>'</h1>
            </div>
            <div className='m-12 p-12'>
                <p>{course.about}</p>
                <p>{course.courseDetails}</p>
            </div>
        </div>
    );
};

export default Enroll;