require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path");

const leadRoutes = require("./routes/leadRoutes");
const Lead = require("./models/lead");
const isLoggedIn = require("./middleware/auth");



const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/", leadRoutes);
// View engine
app.set("view engine", "ejs");

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/", leadRoutes);
app.post("/delete/:id", isLoggedIn, async (req, res) => {
  try {
    console.log("Deleting ID:", req.params.id);

    const deletedLead = await Lead.findByIdAndDelete(req.params.id);

    if (!deletedLead) {
      return res.send("Lead not found");
    }

    res.redirect("/dashboard");

  } catch (err) {
    console.log("DELETE ERROR:", err);
    res.send("Error deleting lead");
  }
});

app.post("/add-note/:id", isLoggedIn, async (req, res) => {
  try {
    const { note } = req.body;

    await Lead.findByIdAndUpdate(req.params.id, {
      $push: {
        notes: { text: note }
      }
    });

    res.redirect("/dashboard");

  } catch (err) {
    console.log(err);
    res.send("Error adding note");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







