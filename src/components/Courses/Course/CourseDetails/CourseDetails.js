import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const courseInfo = useLoaderData();
    const { id, name, courseBanner, courseIntro, courseDetails, cost, about, instructor } = courseInfo;

    return (
        <div>

            <div className='bg-sky-50 m-10 flex justify-around p-10'>
                <div className='w-3/5 p-2'>
                    <div >
                        <h1 className='text-4xl font-extrabold	'>{name}</h1>
                        <h4 className='font-medium py-2'>{courseIntro}</h4>
                        <p className='pb-2'>{courseDetails}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='font-bold'>Course instructor</h1>
                            <div class="flex items-center">

                                <img className='h-8 w-8 rounded-full' src={instructor.image} />
                                <div>
                                    <strong className='pl-1'>{instructor.name}</strong>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-extrabold'>${cost}</h1>
                        </div>

                    </div>
                </div>
                <div className='w-2/5 p-2'>
                    <img className='w-full' src={courseBanner} alt="" />
                    <div className="flex gap-5">
                        <div className='text-2xl'>Time Left</div>
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 15 }}></span>
                            </span>
                            days
                        </div>
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 10 }}></span>
                            </span>
                            hours
                        </div>
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 24 }}></span>
                            </span>
                            min
                        </div>
                        <div>
                            <span className="countdown font-mono text-4xl">
                                <span style={{ "--value": 43 }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                    <button className="btn btn-outline btn-info w-full mt-3">Enroll Now</button>
                </div>
            </div>
            <div className='mx-10 px-10'>
                <h3 className='text-2xl font-bold'>About</h3>
                <h1>{about}</h1>
            </div>
        </div>
    );
};

export default CourseDetails;