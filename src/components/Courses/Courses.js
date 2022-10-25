import { useLoaderData } from "react-router-dom";
import Course from "./Course/Course";

const Courses = () => {

    const courses = useLoaderData();

    return (
        <div className="p-10 flex ">
            <div className="w-1/5 my-12">
                <h1>Total {courses.length}</h1>
            </div>
            <div className="w-4/5">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;