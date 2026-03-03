import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-logo">
          <h1>MAHI TECH</h1>
        </div>
        <div className="nav-cont">
          <Link to="/">Home</Link>
          <Link to="/course">Courses</Link>
          <Link to="/About Us">About us</Link>
          {/* <Link to="/Contact">Contact</Link> */}
         
        </div>
        <div className="nav-enq">
             <Link to="/Enquiry" className="enquiry">Enquiry</Link>

        </div>
      </div>
    </>
  );
};

export default Navbar;
