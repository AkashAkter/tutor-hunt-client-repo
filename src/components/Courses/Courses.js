import { useLoaderData } from "react-router-dom";

const Courses = () => {

    const courses = useLoaderData();

    return (
        <div>
            Total {courses.length}
        </div>
    );
};

export default Courses;