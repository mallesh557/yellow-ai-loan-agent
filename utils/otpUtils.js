const validOtps = ["1234","5678","7889","1209"];

exports.triggerOTP = (phone)=>{
   return {
      status:"OTP Sent",
      phone:phone
   };
};

exports.verifyOTP = (otp)=>{
   return validOtps.includes(otp);
};
