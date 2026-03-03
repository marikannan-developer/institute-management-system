const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Marikannan",
  database: "mahiTech"
});

db.connect((err) => {
  if (err) {
    console.log("❌ MySQL Connection Error:", err);
  } else {
    console.log("✅ MySQL Connected");
  }
});


// ============================
// INSERT ENQUIRY
// ============================
app.post("/enquiry", (req, res) => {

  const { name, phone, email } = req.body;

  console.log("📥 Received Data:", req.body);

  const sql = "INSERT INTO enquiries (name, phone, email) VALUES (?, ?, ?)";

  db.query(sql, [name, phone, email], (err, result) => {

    if (err) {
      console.log("❌ Insert Error:", err);
      res.status(500).json({ error: "Insert failed" });
    } else {
      console.log("✅ Inserted ID:", result.insertId);
      res.json({ message: "Saved successfully" });
    }

  });
});


// ============================
// GET ALL ENQUIRIES
// ============================
app.get("/enquiries", (req, res) => {

  db.query("SELECT * FROM enquiries", (err, result) => {

    if (err) {
      console.log("❌ Fetch Error:", err);
      res.status(500).json({ error: "Fetch failed" });
    } else {
      res.json(result);
    }

  });
});


// ============================
// ADMIN LOGIN
// ============================
app.post("/admin-login", (req, res) => {

  const { username, password } = req.body;

  const sql = "SELECT * FROM admin WHERE username = ? AND password = ?";

  db.query(sql, [username, password], (err, result) => {

    if (err) {
      res.status(500).json({ message: "Server error" });
    } 
    else if (result.length > 0) {
      res.json({ success: true, message: "Login successful" });
    } 
    else {
      res.json({ success: false, message: "Invalid credentials" });
    }

  });
});


// ============================
// DELETE ENQUIRY
// ============================
app.delete("/enquiry/:id", (req, res) => {

  const { id } = req.params;

  db.query("DELETE FROM enquiries WHERE id = ?", [id], (err, result) => {

    if (err) {
      console.log("❌ Delete Error:", err);
      res.status(500).json({ message: "Delete failed" });
    } else {
      res.json({ message: "Deleted successfully" });
    }

  });
});


// ============================
// UPDATE STATUS
// ============================
app.put("/enquiry/:id", (req, res) => {

  const { status } = req.body;
  const { id } = req.params;

  db.query(
    "UPDATE enquiries SET status = ? WHERE id = ?",
    [status, id],
    (err, result) => {

      if (err) {
        console.log("❌ Update Error:", err);
        res.status(500).json({ error: "Update failed" });
      } else {
        res.json({ message: "Status updated successfully" });
      }

    }
  );
});


// ============================
// TEST ROUTE
// ============================
app.get("/", (req, res) => {
  res.send("🚀 Backend running with MySQL");
});


// ============================
// SERVER START
// ============================
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});


// GET All Courses
app.get("/courses", (req, res) => {

  db.query("SELECT * FROM courses", (err, result) => {

    if (err) {
      console.log("Courses Fetch Error:", err);
      res.status(500).json({ error: "Fetch failed" });
    } else {
      res.json(result);
    }

  });

});


// ADD COURSE
app.post("/add-course", (req, res) => {

  const { title, description, duration, fees } = req.body;

  const sql = "INSERT INTO courses (title, description, duration, fees) VALUES (?, ?, ?, ?)";

  db.query(sql, [title, description, duration, fees], (err, result) => {

    if (err) {
      console.log("Course Insert Error:", err);
      res.status(500).json({ error: "Insert failed" });
    } else {
      res.json({ message: "Course added successfully" });
    }

  });

});


// DELETE COURSE
app.delete("/course/:id", (req, res) => {

  db.query("DELETE FROM courses WHERE id = ?", [req.params.id], (err) => {

    if (err) {
      res.status(500).json({ error: "Delete failed" });
    } else {
      res.json({ message: "Deleted successfully" });
    }

  });

});


// DELETE Course
app.delete("/course/:id", (req, res) => {

  const { id } = req.params;

  const sql = "DELETE FROM courses WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log("Course Delete Error:", err);
      res.status(500).json({ message: "Delete failed" });
    } else {
      res.json({ message: "Course deleted successfully" });
    }
  });

});


