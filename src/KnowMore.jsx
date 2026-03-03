import "./KnowMore.css";
import { Link } from "react-router-dom";

const KnowMore = () => {
  return (
    <div className="about-page">

      
      <div className="about-banner">
        <h1>About Mahi Tech</h1>
        <p>Empowering Students with Real-Time IT Skills</p>
      </div>

      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          Mahi Tech is a job-oriented IT training institute focused on
          real-time project-based learning. Our goal is to make students
          industry-ready with practical skills and placement support.
        </p>
      </div>

     
      <div className="mission-vision">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To provide practical and industry-ready IT training through
            hands-on projects and expert mentorship.
          </p>
        </div>

        <div className="card">
          <h3>Our Vision</h3>
          <p>
            To build confident professionals who can succeed in the
            competitive IT industry.
          </p>
        </div>
      </div>

      
      <div className="why-choose">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Real-Time Projects</li>
          <li>✔ Placement Guidance</li>
          <li>✔ Affordable Fees</li>
          <li>✔ Online & Offline Classes</li>
          <li>✔ Experienced Trainers</li>
        </ul>
      </div>

      
      <div className="about-cta">
        <h2>Ready to Start Your IT Career?</h2>
        <Link to="/enquiry" className="cta-btn">
          Enquire Now
        </Link>
      </div>

    </div>
  );
};

export default KnowMore;

