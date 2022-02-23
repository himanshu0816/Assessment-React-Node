const express = require("express");
const { User } = require("../db/user");
const router = new express.Router();
const validator = require("validator");

// API for home page
router.get("/", (req, res) => {
  res.end(
    "Welcome to Our Hotel \nVisit /login to login or \nVisit /signup to signup or \nVisit /delete to delete your profile or\n visit /update to update"
  );
});

// API for signup
router.post("/signup", async (req, res) => {
  const user = new User(req.body);
  console.log(user);
  try {
    await user.save();
    res.status(201).send({ user });
  } catch (e) {
    res.status(e);
  }
});

// API for login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.send("Please enter valid cred");
    } else {
      const user = await User.findOne({ Password: req.body.Password });
      if (!user) {
        res.send("Please enter valied cred");
      } else {
        console.log(user);
        res.send({ user });
      }
    }
  } catch (e) {
    res.status(400);
  }
});

// API for delete
router.delete("/delete", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.send("please enter a valid cred");
    } else {
      const user = User.findOne({ Password: req.body.Password });
      if (!user) {
        res.send("Please enter valid cred");
      } else {
        await user.deleteOne();
        res.send("Used Deleted Successfully");
      }
    }
  } catch (e) {
    res.status(400);
  }
});

// API for update
router.patch("/update", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.send("Please enter valid Cred");
    } else {
      const user = User.findOne({ Password: req.body.Password });
      if (!user) {
        res.send("Please enter valid cred");
      } else {
        await user.updateOne({ Phone: req.body.Phone });
        res.send("User details updated");
      }
    }
  } catch (e) {
    res.status(400);
  }
});

module.exports = router;
