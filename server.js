const express = require("express");
const connectDB = require("./config/connectDB");
const routes = require("./routes/user");
var cors = require("cors");
// instanciation
const app = express();
app.use(cors());
require("dotenv").config();
app.use(express.json());
connectDB();
app.use("/api/user", routes);

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`server is running on ${PORT}`);
});
