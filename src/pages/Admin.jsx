import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {

  const navigate = useNavigate();

 
  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");
    if (!isAdmin) {
      navigate("/login");
    }
  }, [navigate]);

  

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const res = await axios.get("http://localhost:5000/enquiries");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // =========================
  // 📊 DASHBOARD STATS
  // =========================
  const totalLeads = data.length;
  const pendingLeads = data.filter(i => i.status === "Pending").length;
  const contactedLeads = data.filter(i => i.status === "Contacted").length;
  const convertedLeads = data.filter(i => i.status === "Converted").length;

  // =========================
  // ❌ DELETE ENQUIRY
  // =========================
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/enquiry/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // 🔄 UPDATE STATUS
  // =========================
  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/enquiry/${id}`, {
        status: newStatus,
      });

      setData(prev =>
        prev.map(item =>
          item.id === id ? { ...item, status: newStatus } : item
        )
      );

    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // 🚪 LOGOUT
  // =========================
  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/login");
  };

  // =========================
  // 📚 COURSES SECTION
  // =========================
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/courses");
      setCourses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    duration: "",
    fees: ""
  });

  const handleCourseChange = (e) => {
    setNewCourse({
      ...newCourse,
      [e.target.name]: e.target.value
    });
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/add-course", newCourse);
      alert("Course Added Successfully");

      setNewCourse({
        title: "",
        description: "",
        duration: "",
        fees: ""
      });

      fetchCourses(); // refresh list

    } catch (error) {
      console.log(error);
    }
  };

  const handleCourseDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/course/${id}`);
      setCourses(courses.filter(course => course.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // UI
  // =========================
  return (
    <div className="admin-container">

      {/* HEADER */}
      <div className="admin-header">
        <h2>Admin Panel</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* DASHBOARD */}
      <div className="dashboard-cards">
        <div className="card total">
          <h3>Total</h3>
          <p>{totalLeads}</p>
        </div>

        <div className="card pending">
          <h3>Pending</h3>
          <p>{pendingLeads}</p>
        </div>

        <div className="card contacted">
          <h3>Contacted</h3>
          <p>{contactedLeads}</p>
        </div>

        <div className="card converted">
          <h3>Converted</h3>
          <p>{convertedLeads}</p>
        </div>
      </div>

      {/* ENQUIRIES TABLE */}
      <h3>Enquiries</h3>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>

              <td>
                <select
                  value={item.status}
                  onChange={(e) =>
                    handleStatusChange(item.id, e.target.value)
                  }
                >
                  <option value="Pending">Pending</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Converted">Converted</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ADD COURSE */}
      <h3 style={{ marginTop: "40px" }}>Add New Course</h3>

      <form className="course-form" onSubmit={handleAddCourse}>
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={newCourse.title}
          onChange={handleCourseChange}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newCourse.description}
          onChange={handleCourseChange}
          required
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={newCourse.duration}
          onChange={handleCourseChange}
          required
        />

        <input
          type="text"
          name="fees"
          placeholder="Fees"
          value={newCourse.fees}
          onChange={handleCourseChange}
          required
        />

        <button type="submit">Add Course</button>
      </form>

      {/* COURSE LIST */}
      <h3 style={{ marginTop: "40px" }}>All Courses</h3>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Duration</th>
            <th>Fees</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.duration}</td>
              <td>{course.fees}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleCourseDelete(course.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default Admin;
