import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5000/admin-login",
      form
    );

    if (res.data.success) {
      localStorage.setItem("admin", "true");
      navigate("/admin");
    } else {
      setMsg("❌ Invalid credentials");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Admin Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p>{msg}</p>
    </div>
  );
};

export default Login;
