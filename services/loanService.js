exports.getLoanAccounts = ()=>{

   const rawData = [
      {
        loan_id:"L001",
        loan_type:"Home Loan",
        tenure:"20 years",
        audit_log:"ignore",
        internal_code:"XYZ"
      },
      {
        loan_id:"L002",
        loan_type:"Car Loan",
        tenure:"5 years",
        audit_log:"ignore"
      }
   ];

   // Projection Layer
   return rawData.map(l=>({
      loan_id:l.loan_id,
      loan_type:l.loan_type,
      tenure:l.tenure
   }));
};

exports.getLoanDetails = ()=>{

   const raw = {
      interest_rate:"8.5%",
      principal_pending:"500000",
      interest_pending:"80000",
      nominee:"Ravi",
      backend_notes:"ignore"
   };

   return {
      interest_rate:raw.interest_rate,
      principal_pending:raw.principal_pending,
      interest_pending:raw.interest_pending,
      nominee:raw.nominee
   };
};
