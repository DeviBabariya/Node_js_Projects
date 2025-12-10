const express = require("express");
const { verifytoken, Roleverify } = require("../middleware/verifytoken");
const router = express.Router();
const uploadImage = require("../middleware/uploadImg");
const { registerUser, loginUser, getUserProfile } = require("../controller/auth.controller");

router.post("/register", uploadImage.single("profileImage"), registerUser);

router.post("/login", loginUser);
router.get("/profile", verifytoken, getUserProfile);

    
module.exports = router;
