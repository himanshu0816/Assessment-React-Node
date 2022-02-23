const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

// DB connection
mongoose.connect("mongodb://127.0.0.1:27017/hotel");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(User);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
