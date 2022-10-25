import { useLoaderData } from "react-router-dom";
import SideNav from "../../SideNav/SideNav";
import Course from "./Course/Course";

const Courses = () => {

    const courses = useLoaderData();

    return (
        <div className="p-10 flex ">
            <div className="w-1/5 my-12">

                {
                    courses.map(course => <SideNav
                        key={course.id}
                        course={course}
                    ></SideNav>)
                }
            </div>
            <div className="w-4/5">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div >
    );
};

export default Courses;