import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const courseInfo = useLoaderData();
    const { id, name, courseBanner, courseIntro, courseDetails, about, instructor } = courseInfo;

    return (
        <div className='bg-sky-100 m-10'>
            <div>
                <div>
                    <h1>{name}</h1>
                    <h4>{courseIntro}</h4>
                </div>
                <div>
                    <div class="flex items-center">
                        <img className='h-15 w-15' src={instructor.image} />
                        <div>
                            <strong>Andrew Alfred</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={courseBanner} alt="" />
            </div>
        </div>
    );
};

export default CourseDetails;