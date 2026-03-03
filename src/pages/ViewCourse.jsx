import "./ViewCourse.css"

const courses = [
  {
    id: 1,
    title: "Python Full Stack",
    desc: "Frontend + Backend with real-time projects",
    duration: "3 Months"
  },
  {
    id: 2,
    title: "MERN Stack Development",
    desc: "MongoDB, Express, React, Node",
    duration: "3 Months"
  },
  {
    id: 3,
    title: "Frontend Development",
    desc: "HTML, CSS, JavaScript, React",
    duration: "2 Months"
  },
  {
    id: 4,
    title: "Software Testing",
    desc: "Manual + Automation basics",
    duration: "2 Months"
  },
  {
    id: 5,
    title: "Data Analytics",
    desc: "Excel, SQL, Python, Power BI",
    duration: "3 Months"
  },
  {
    id: 6,
    title: "Java Full Stack",
    desc: "Core Java, Spring Boot, React",
    duration: "4 Months"
  },
  {
    id: 7,
    title: "UI/UX Design",
    desc: "Figma, Wireframing, Prototyping",
    duration: "2 Months"
  },
  {
    id: 8,
    title: "Digital Marketing",
    desc: "SEO, Google Ads, Social Media",
    duration: "2 Months"
  },
  {
    id: 9,
    title: "DevOps Training",
    desc: "Docker, Kubernetes, CI/CD",
    duration: "3 Months"
  },
  {
    id: 10,
    title: "Cloud Computing (AWS)",
    desc: "AWS Services, Deployment, Security",
    duration: "3 Months"
  },
  {
    id: 11,
    title: "Cyber Security",
    desc: "Ethical Hacking, Network Security",
    duration: "3 Months"
  },
  {
    id: 12,
    title: "Mobile App Development",
    desc: "React Native / Flutter",
    duration: "3 Months"
  }
];


const ViewCourse = () => {
  return (
    <>
      {courses.map((lists) => {
        return (
          <div className="course-card" key={lists.id}>
            <h2>{lists.title}</h2>
            <p className="course-desc">{lists.desc}</p>
            <p className="course-duration">{lists.duration}</p>
          </div>
        );
      })}
    </>
  );
};

export default ViewCourse;
