import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, name, courseBanner, courseIntro, cost, enrolled } = course;
    return (

        <div>
            <Link to={`/courses/${id}`}>
                <div className='bg-stone-200 hover:bg-cyan-100 hover:drop-shadow-2xl rounded-lg my-12'>
                    <img className='h-full w-full rounded-lg' src={courseBanner} alt="" />
                    <div className='p-4'>
                        <h1 className='font-bold text-xl'>{name}</h1>
                        <small>{courseIntro}</small>
                        <div className='flex justify-between'>
                            <p>Fees : $<span className='font-bold text-lg'>{cost}</span></p>
                            <p>Total Enroll <span className='font-bold text-lg'> {enrolled}</span></p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>




    );
};

export default Course;