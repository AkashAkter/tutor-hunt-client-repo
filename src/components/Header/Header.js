import { FaUserAlt, FaRegUser } from 'react-icons/fa';
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import image from '../../assests/Logo.png'
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {

    const location = useLocation();

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const darkMode = () => {
        document.documentElement.classList.toggle('dark');
    }

    return (
        <div className=''>
            <div className="navbar px-4 dark:bg-slate-700">
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
                            <li><button onClick={darkMode}>Test</button></li>

                        </ul>
                    </div>

                    <Link className='flex items-center' to='/' >
                        <img className='h-12 w-12' src={image} alt="" />
                        <p className=" p-4 rounded-full bg-cyan-50 hover:bg-cyan-500 hover:text-white normal-case text-xl dark:bg-slate-600 dark:text-white dark:font-black dark:hover:bg-slate-400">Tutor Hunt</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {

                            location.pathname === '/courses' ?

                                <li className='hover:bg-cyan-200 rounded-lg hover:text-white hover:font-semibold dark:text-white dark:hover:bg-slate-500 font-bold'>
                                    <Link to='/courses'>Course List</Link>
                                </li>
                                :
                                <li className='hover:bg-cyan-200 rounded-lg hover:text-white hover:font-semibold dark:text-white dark:hover:bg-slate-500 font-bold'>
                                    <Link to='/courses'>Courses</Link>
                                </li>


                        }
                        <li className='hover:bg-cyan-200 rounded-lg hover:text-white hover:font-semibold dark:text-white dark:hover:bg-slate-500 font-bold'>
                            <Link to='/faq'>FAQ</Link>
                        </li>
                        <li className='hover:bg-cyan-200 rounded-lg hover:text-white hover:font-semibold dark:text-white dark:hover:bg-slate-500 font-bold'>
                            <Link to='/blogs'>Blogs</Link>
                        </li>
                        <li className='hover:bg-cyan-200 rounded-lg hover:text-white hover:font-semibold dark:text-white dark:hover:bg-slate-500 font-bold'>
                            <Link to='/signIn'>Sign In</Link>
                        </li>
                        <li className='hover:bg-cyan-200 rounded-lg hover:text-white hover:font-semibold dark:text-white dark:hover:bg-slate-500 font-bold'>
                            <Link to='/signUp'>Sign Up</Link>
                        </li>
                        <li className='text-sm p-0 rounded-lg dark:bg-slate-50'><button onClick={darkMode}>Change Mode</button></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ?
                            <>
                                {
                                    user.photoURL ?
                                        <>
                                            <div className='flex group mr-2 tooltip tooltip-left' data-tip={user.displayName}>
                                                <img className='w-8 h-8 rounded-full' src={user?.photoURL} alt="" />
                                            </div>
                                            <button onClick={handleLogOut} className="relative inline-flex items-center justify-center p-0.5 ml-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                                <span className="relative px-1 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                    Sign Out
                                                </span>
                                            </button>
                                        </>
                                        :
                                        <>
                                            <FaUserAlt></FaUserAlt>
                                            <button onClick={handleLogOut} className="relative inline-flex items-center justify-center p-0.5 ml-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                                <span className="relative px-1 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                    Sign Out
                                                </span>
                                            </button>

                                        </>
                                }

                            </>

                            : <Link to='/signIn'><FaRegUser></FaRegUser></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;