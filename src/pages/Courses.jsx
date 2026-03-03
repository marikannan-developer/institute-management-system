import { useEffect, useState } from "react";
import axios from "axios";
import "./Courses.css";

const Courses = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="courses-container">
      <h2>Our Courses</h2>

      <div className="courses-grid">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Fees:</strong> {course.fees}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
