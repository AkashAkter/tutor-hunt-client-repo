import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({ course }) => {
    const { id, name, courseBanner } = course;
    return (
        <div className='m-5'>
            <Link to={`/courses/${id}`}>
                <div className='rounded mb-8 mr-4 outline-2 outline-blue-500/50 hover:shadow-lg hover:shadow-cyan-500/50'>
                    <img className='rounded-l-lg' src={courseBanner} alt="" />
                    <h1 className='text-center	font-semibold'>{name}</h1>
                </div>
            </Link>
        </div>
    );
};

export default SideNav;