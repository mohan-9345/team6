const express = require("express");
const { BlobServiceClient } = require("@azure/storage-blob");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3002;

// Connect to SQLite database
const db = new sqlite3.Database("vacationouting.db");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/Pondichery", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Packages/Pondichery/Pondichery.html")
  );
});

app.get("/NarmadaRiver", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "public",
      "/Packages/Narmadha River/Narmadha River.html"
    )
  );
});

// Destination page
app.get("/goa", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Destination/goa/goa.html"));
});

app.get("/maldives", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Destination/maldives/Maldives.html")
  );
});

app.get("/tajmahal", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Destination/tajmahal/tajmahal.html")
  );
});

// Packages page
app.get("/manali", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Packages/Manaali/Manaali.html")
  );
});

app.get("/shimla", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Packages/Simla/Simla.html"));
});

app.get("/ooty", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Packages/Ooty/Ooty.html"));
});

app.get("/munar", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Packages/Munar/Munar.html"));
});

app.get("/bangalore", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "/Packages/Bengalur/Bengalur.html")
  );
});

// Signup page
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/registerform.html"));
});

// Login page
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/new login.html"));
});

// Booking Form page
app.get("/bookingform", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/Bookingform.html"));
});

app.get("/privacy&policy", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/footer/privacy index.html"));
});

app.get("/tearms&condition", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/footer/terms.html"));
});

app.get("/faq", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/footer/faq.html"));
});



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
