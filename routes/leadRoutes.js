const express = require("express");
const router = express.Router();
const Lead = require("../models/lead");
const auth = require("../middleware/auth");

// Login Page
router.get("/login", (req, res) => {
  res.render("login");
});

// Login Logic
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    req.session.user = email;
    return res.redirect("/dashboard");
  } else {
    return res.send("Invalid credentials");
  }
});

// Dashboard
const isLoggedIn = require("../middleware/auth");

router.get("/dashboard", isLoggedIn, async (req, res) => {
  const leads = await Lead.find();
  res.render("dashboard", { leads });
});

// Add Lead Form
router.get("/add", auth, (req, res) => {
  res.render("add");
});

// Add Lead
router.post("/add", auth, async (req, res) => {
  const { name, email, source } = req.body;

  await Lead.create({
    name,
    email,
    source,
    status: "New",
    notes: []   // ✅ Always start empty
  });

  res.redirect("/dashboard");
});



// Update Status
router.post("/update/:id", auth, async (req, res) => {
  await Lead.findByIdAndUpdate(req.params.id, {
    status: req.body.status,
  });
  res.redirect("/dashboard");
});

// Add Follow-Up Note
router.post("/add-note/:id", auth, async (req, res) => {
  try {
    const noteText = req.body.note;

    if (!noteText) {
      return res.redirect("/dashboard");
    }

    await Lead.findByIdAndUpdate(req.params.id, {
      $push: {
        notes: {
          text: noteText,
          createdAt: new Date()
        }
      }
    });

    res.redirect("/dashboard");

  } catch (error) {
    console.log(error);
    res.send("Error adding note");
  }
});


// Logout
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;
