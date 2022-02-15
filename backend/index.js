const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
process.env.MONGODB_URL ??
  "mongodb+srv://root:9v4KT7uhMVEjTj4@cluster0.ihvzv.mongodb.net/auth_MERN?retryWrites=true&w=majority\n";

//* Create our app
const app = express();
const port = 5000;

//* the will let us get data the data form post

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//* Coneection to database :

mongoose.connect(MONGODB_URL);

//! Start server :
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// console
function ConsolLog(rep, res, next) {
  console.log(" [" + rep["method"] + "] http://localhost:" + port + rep["url"]);

  next();
}

app.use(ConsolLog);


//* Require Routes
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

//* Register Our Routes
app.use(
    "/api/v1/users",
    AuthMiddleware.isLogin,
    AuthMiddleware.hasRole(["admin", "user"]),
    userRoutes
  );
