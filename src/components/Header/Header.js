
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assests/Logo.png'
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li><Link to='/signIn'>Sign In</Link></li>
                            <li><Link to='/signUp'>Sign Up</Link></li>

                        </ul>
                    </div>

                    <Link className='flex items-center' to='/' >
                        <img className='h-12 w-12' src={image} alt="" />
                        <p className=" p-4 rounded-full bg-cyan-50 hover:bg-cyan-500 hover:text-white normal-case text-xl">Tutor Hunt</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='hover:bg-cyan-200 rounded-lg hover:text-white hover:font-semibold'>
                            <Link to='/courses'>Courses</Link>
                        </li>
                        <li className='hover:bg-cyan-200 rounded-lg hover:text-white hover:font-semibold'>
                            <Link to='/faq'>FAQ</Link>
                        </li>
                        <li className='hover:bg-cyan-200 rounded-lg hover:text-white hover:font-semibold'>
                            <Link to='/blogs'>Blogs</Link>
                        </li>
                        <li className='hover:bg-cyan-200 rounded-lg hover:text-white hover:font-semibold'>
                            <Link to='/signIn'>Sign In</Link>
                        </li>
                        <li className='hover:bg-cyan-200 rounded-lg hover:text-white hover:font-semibold'>
                            <Link to='/signUp'>Sign Up</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <p>{user?.name}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;