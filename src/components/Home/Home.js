import { Link } from 'react-router-dom';
import './Home.css';
import blog01 from './blog01.jpg';
import bg2 from './bg2.jpg';
import { FaUser } from "react-icons/fa";


const Home = () => {

    return (
        <main>
            <header>
                <div className="bg">
                    <div className='text-center'>
                        <h1 className='text-7xl	font-black text-white my-12 py-12'>
                            This is the Place where you can improve your skills.
                        </h1>
                        <p className='lg:m-12 lg:px-12 text-2xl text-white'>Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java etc.</p>

                    </div>

                </div>
            </header>


            <section>
                <div className="grid lg:grid-cols-2 gap-4 m-12 lg:p-12 items-center	">
                    <div>
                        <h1 className='text-2xl font-semibold mb-2'>A FEW WORDS ABOUT US</h1>
                        <p className='mb-2'> Verbonix is a global translation services and language courses company founded in 1999. We aim to deliver quliaty translation and educational services for everyone.With a core group of more than 700 professional linguists and tutors operating from six continents, we serve the needs of our clients worldwide. Whatever your language needs are, we are here to help.</p>
                        <Link><button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Our Courses</button></Link>
                    </div>
                    <div>
                        <img className='rounded-lg p-6' src={blog01} alt="" />
                    </div>
                </div>
            </section>



            <section>

                <div className="grid lg:grid-cols-4 grid-cols-2 text-center m-8">
                    <div className='hover:bg-cyan-400 py-5 rounded-3xl'>
                        <h1 className='text-7xl'>1500</h1>
                        <h1 className='font-bold'>Students</h1>
                    </div>
                    <div className='hover:bg-cyan-400 py-5 rounded-3xl'>
                        <h1 className='text-7xl'>30</h1>
                        <h1 className='font-bold'>Instructors</h1>
                    </div>
                    <div className='hover:bg-cyan-400 py-5 rounded-3xl'>
                        <h1 className='text-7xl'>9</h1>
                        <h1 className='font-bold'>Courses</h1>
                    </div>
                    <div className='hover:bg-cyan-400 py-5 rounded-3xl'>
                        <h1 className='text-7xl'>3</h1>
                        <h1 className='font-bold'>Categories</h1>
                    </div>

                </div>
            </section>

            <section>
                <div className="lg:flex m-12 items-center">
                    <div className="w-2/5">
                        <h1 className='text-4xl text-center font-bold'>Study With Group of professionals</h1>
                    </div>
                    <div className="w-3/5">
                        <img src={bg2} alt="" />
                    </div>
                </div>
                <div className='enroll p-12'>
                    <div className='p-12 text-center'>
                        <h1 className='text-4xl mb-5 font-bold'>Start Your Journey Here</h1>
                        <Link to='/courses'><button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Our Courses</button></Link>
                    </div>
                </div>
            </section>

        </main>

    );
};

export default Home;