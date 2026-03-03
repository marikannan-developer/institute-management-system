import { useState } from "react";
import axios from "axios";
import "./Enquiry.css";

const Enquiry = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const [msg, setMsg] = useState("");

  // input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/enquiry",
        formData
      );

      setMsg("✅ Enquiry submitted successfully!");
      setFormData({ name: "", phone: "", email: "" });

    } catch (error) {
      console.log(error);
      setMsg("❌ Something went wrong");
    }
  };

  return (
    <div className="enquiry-container">
      <div className="enquiry-box">
        <h2>Course Enquiry</h2>
        <p>Fill the form and we will contact you soon</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Enquiry</button>
        </form>

        {msg && <p className="msg">{msg}</p>}
      </div>
    </div>
  );
};

export default Enquiry;
