import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {

    const handleSignUp = () => {
        console.log("HI")
    }

    const { createUser } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.fullname.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, photoURL, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Create an Account</h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname"
                                placeholder="Full Name"
                                required />

                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"
                                required />

                            <input
                                type="link"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="photoURL"
                                placeholder="Photo URL"
                                required />
                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                                required />

                            <button type="submit" className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                        </form>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <Link to='/signIn' className="no-underline border-b border-blue text-blue">
                            Log in
                        </Link>.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;