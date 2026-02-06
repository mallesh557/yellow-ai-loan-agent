const express = require("express");
const loanRoutes = require("./routes/loanRoutes");

const app = express();

app.use(express.json());
app.use("/api", loanRoutes);

app.listen(3000, () => {
   console.log("Server running on port 3000");
});
