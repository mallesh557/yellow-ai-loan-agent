const service = require("../services/loanService");
const otpUtils = require("../utils/otpUtils");

exports.triggerOtp = (req,res)=>{
   const {phone} = req.body;
   res.json(otpUtils.triggerOTP(phone));
};

exports.verifyOtp = (req,res)=>{
   const {otp} = req.body;
   res.json({verified: otpUtils.verifyOTP(otp)});
};

exports.getLoanAccounts = (req,res)=>{
   res.json(service.getLoanAccounts());
};

exports.getLoanDetails = (req,res)=>{
   const id = req.params.id;
   res.json(service.getLoanDetails(id));
};
