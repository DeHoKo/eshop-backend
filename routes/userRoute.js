const express = require("express");
const User = require("../models/userModel");

const router = express.Router();

router.get("/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: "dummyName",
      email: "dummyEmail@dummy.com",
      password: "dummyisstrong",
      isAdmin: true,
    });

    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

module.exports = router;
