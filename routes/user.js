const { Register, Login } = require("../controllers/user.controllers");
const express = require("express");
const isAuth = require("../middleware/isAuth");
const {
    registerValidator,
    loginValidator,
    validation,
} = require("../middleware/user.validator");
const router = express.Router();
// testing route
router.get("/", (req, res) => {
    res.send({ message: "test routing" });
});
// register
router.post("/add", registerValidator(), validation, Register);

//login
router.post("/login", loginValidator(), validation, Login);

//current
router.get("/current", isAuth, (req, res) => {
    res.send({ message: "authorized", user: req.user });
});
module.exports = router;
