import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../components/Blogs/Blogs";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import Enroll from "../../components/Enroll/Enroll";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
import SignUp from "../../components/Sign Up/SignUp";
import SignIn from "../../components/SignIn/SignIn";
import WrongRoute from "../../components/WrongRoute/WrongRoute";
import Main from "../../layout/Main/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://tutor-hunt-server-site.vercel.app/courses')
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://tutor-hunt-server-site.vercel.app/courses/${params.id}`)
            },
            {
                path: '/courses/:id/enroll',
                element: <PrivateRoute><Enroll></Enroll></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tutor-hunt-server-site.vercel.app/courses/${params.id}`)
            },
            {
                path: '*',
                element: <WrongRoute></WrongRoute>
            }
        ]

    }
])