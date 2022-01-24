const mongoose = require("mongoose");
const { Schema, model } = mongoose;
// = new mongoose.Schema
// mongoose.model
// mongoose.Schema
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: Number,
});

module.exports = User = model("user", userSchema);
