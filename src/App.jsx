import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Enquiry from "./pages/Enquiry";
import ViewCourse from "./pages/ViewCourse";
import KnowMore from "./KnowMore";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/view-course" element={<ViewCourse/>}/>
          <Route path="/know-more" element={<KnowMore/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
