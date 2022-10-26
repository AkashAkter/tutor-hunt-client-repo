import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Enroll = () => {
    const course = useLoaderData();
    // console.log(course);
    return (
        <div>
            <h1>{course.name}</h1>
        </div>
    );
};

export default Enroll;