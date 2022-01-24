const express = require("express");
const connectDB = require("./config/connectDB");
const routes = require("./routes/user");
// instanciation
const app = express();
require("dotenv").config();
app.use(express.json());
connectDB();
app.use("/api/user", routes);
const PORT = process.env.PORT;

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`server is running on ${PORT}`);
});
