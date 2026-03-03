import "./Home.css";
import { MdOnDeviceTraining } from "react-icons/md";
import { RiNotificationLine } from "react-icons/ri";
import { MdOutlineAttachMoney } from "react-icons/md";
import { ImAirplane } from "react-icons/im";

import Practice from "../assets/practice.jpg";
import Learn from "../assets/learn.jpg";
import Project from "../assets/project.jpg";
import Interview from "../assets/interview.jpg";

import image from "../assets/teach-2.jpg";
import { FaMessage } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="pic">
        <div className="pic-cont">
          <h1>MAHI TECH</h1>
          <p>Job Oriented IT Training Institute</p>
          <p>Learn Industry-Ready Skills with Real-Time Projects</p>

          <Link to="/view-course" className="viw-btn">
            View Courses
          </Link>

          <Link className="enq-btn" to="/enquiry">
            Enquire Now
          </Link>
        </div>
      </div>
      <div className="icons">
        <div className="icon-1">
          <MdOnDeviceTraining size={30} />
          <h3>Real-Time Project Training</h3>
        </div>

        <div className="icon-2">
          <RiNotificationLine size={30} />
          <h3>Online&Offline Classes</h3>
        </div>

        <div className="icon-3">
          <MdOutlineAttachMoney size={30} />
          <h3>Affordable Fees</h3>
        </div>

        <div className="icon-4">
          <ImAirplane size={20} />
          <h3>Placement Guidance</h3>
        </div>
      </div>

      <div className="about">
        <div className="abt-1">
          <h2>About Mahi Tech</h2>
          <p>Professional IT Training with Real-Time Projects.</p>
          <p>Helping You Become Job Ready!</p>
        </div>

        <div className="abt-2">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <div className="abt2-cont">
            <h3>Professiobal IT Training</h3>
            <h3>With Real-Time Projects.</h3>
            <p>Helping You Become Job-Ready !</p>
            <button
              onClick={() => {
                console.log("Clicked");
                navigate("/know-more");
              }}
            >
              Know More
            </button>
          </div>
        </div>
      </div>

      <div className="courses">
        <h1>Our Popular Courses</h1>
        <div className="course-list">
          <div className="cour-1">
            <img src={image} alt="" />
            <h4>Python Full stack</h4>
            <button
              onClick={() => {
                navigate("/view-course");
              }}
            >
              View Details
            </button>
          </div>

          <div className="cour-1">
            <img src={image} alt="" />
            <h4>Java AI Full stack</h4>
            <button
              onClick={() => {
                navigate("/view-course");
              }}
            >
              View Details
            </button>
          </div>

          <div className="cour-1">
            <img src={image} alt="" />
            <h4>Python AI Full stack</h4>
            <button
              onClick={() => {
                navigate("/view-course");
              }}
            >
              View Details
            </button>
          </div>

          <div className="cour-1">
            <img src={image} alt="" />
            <h4>Mern Stack Developer</h4>
            <button
              onClick={() => {
                navigate("/view-course");
              }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      <div className="training">
        <div>
          <h1>Our Training Process</h1>
        </div>
        <div className="process">
          <div className="training">
            <img src={Practice} alt="" />
            <h4>Practice Hands-On </h4>
          </div>

          <div className="learn">
            <img src={Learn} alt="" />
            <h4>Learn Concepts</h4>
          </div>

          <div className="project">
            <img src={Project} alt="" />
            <h4>Real Time Project</h4>
          </div>

          <div className="interview">
            <img src={Interview} alt="" />
            <h4>Interview Preparation</h4>
          </div>
        </div>
      </div>

      <div className="tra-h1">
        <h1>Online & Offline Training</h1>
      </div>

      <div className="of-tra">
        <div className="part-1">
          <div className="mesg">
            <FaMessage size={25} />
            <h3 id="h3">Online Training</h3>
          </div>
          <div className="tick">
            <TiTick size={20} />

            <h3>Live interactive Classes</h3>
          </div>
          <div className="tick">
            <TiTick size={20} />
            <h3>Recordered Session</h3>
          </div>
        </div>

        <div className="part-2">
          <div className="mes-2">
            <FaMessage size={25} />
            <h3 id="tick-h3">Offline Training</h3>
          </div>
          <div className="tick2">
            <TiTick size={20} />
            <h3>Classroom Learning</h3>
          </div>

          <div className="tick2">
            <TiTick size={20} />
            <h3>In-Person Guidance</h3>
          </div>
        </div>
      </div>

      <div className="cta">
        <div className="cta-content">
          <h2>Ready To Start Your IT Career With Mahi Tech?</h2>
          <p>
            Join our job-oriented IT courses with real-time projects and
            placement guidance. Contact us today!
          </p>

          <div className="cta-buttons">
            <a href="tel:+919876543210" className="call-btn">
              📞 Call Now
            </a>

            <a
              href="https://wa.me/918825412858?text=Hi%20I%20am%20interested%20in%20your%20course"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="quick">
          <h2>Quick Links</h2>
          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => navigate("/course")}>Courses</p>
          <p onClick={() => navigate("/About Us")}>About Us</p>
        </div>
        <div className="contact">
          <h2>Contact Us</h2>
          <p>
            <b>Call:</b>91+8825412858
          </p>
          <p>
            <b>Email:</b>Info@mahitech.com
          </p>
        </div>
        <div className="location">
          <h2>Location</h2>
          <p>123,XYZ Street,Chennai</p>
        </div>
      </div>
    </>
  );
};

export default Home;
