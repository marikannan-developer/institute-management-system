import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate()
  return (
    <div className="about-container">

      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Mahi Tech</h1>
        <p>
          Mahi Tech is a leading IT training institute providing real-time,
          practical oriented software courses with placement support.
        </p>
      </div>

      {/* Mission Section */}
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide industry-ready training with hands-on
          projects and real-time experience to help students build a
          successful IT career.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="about-section">
        <h2>Why Choose Us?</h2>

        <div className="features">
          <div className="feature-card">
            <h3>Real-Time Projects</h3>
            <p>Work on live projects with practical exposure.</p>
          </div>

          <div className="feature-card">
            <h3>Expert Trainers</h3>
            <p>Learn from experienced industry professionals.</p>
          </div>

          <div className="feature-card">
            <h3>Placement Support</h3>
            <p>Resume preparation & interview training support.</p>
          </div>

          <div className="feature-card">
            <h3>Flexible Learning</h3>
            <p>Online & Offline batches available.</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats">
        <div>
          <h2>500+</h2>
          <p>Students Trained</p>
        </div>

        <div>
          <h2>10+</h2>
          <p>Courses Offered</p>
        </div>

        <div>
          <h2>85%</h2>
          <p>Placement Rate</p>
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta">
        <h2>Start Your IT Career With Us Today</h2>
        <button onClick={()=>navigate("/enquiry")}>Enroll Now</button>
      </div>

    </div>
  );
};

export default About;
