const express = require("express");
const router = express.Router();
const controller = require("../controllers/loanController");

router.post("/trigger-otp", controller.triggerOtp);
router.post("/verify-otp", controller.verifyOtp);
router.get("/loan-accounts", controller.getLoanAccounts);
router.get("/loan-details/:id", controller.getLoanDetails);

module.exports = router;
