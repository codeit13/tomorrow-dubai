const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");

const session = require("express-session");
// const passport = require("../config/passport");

// const connectEnsureLogin = require("connect-ensure-login"); //authorization

const authMiddleware = require("../middleware/auth");

const app = express();

// const { CronJob } = require("cron");

const categoryRoutes = require("../service/categoryService");
const listingRoutes = require("../service/listingService");
const listingSearchRoutes = require("../service/listingSearchService");
const propertyRoutes = require("../service/propertyService");
const neighbourRoutes = require("../service/neighbourService");
const exclusiveRoutes = require("../service/exclusiveService");
const contactRoutes = require("../service/contactService");
const agentRoutes = require("../service/agentService");
const loginRoutes = require("../service/loginService");
const logoutRoutes = require("../service/logoutService");
const userRoutes = require("../service/userService");
const blogRoutes = require("../service/blogService");
const cors = require("cors");

const mongo = require("../config/app-mongo.js");

// const job = new CronJob(
//   "0 0 * * *",
//   async function () {
//     await generateSiteMap();
//   }, // onTick
//   null, // onComplete
//   true, // start
//   "America/Los_Angeles" // timeZone
// );

mongo.connect();

app.use(express.json());

// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// server main website
// app.use("/", express.static(path.join(__dirname, "../nuxt/.output/public")));

const corsOptions = {
  origin: [
    "http://tomorrowdubai.com",
    "https://tomorrowdubai.com",
    "http://www.tomorrowdubai.com",
    "https://www.tomorrowdubai.com",
    "https://tomorrowluxuryproperty.com",
    "https://www.tomorrowluxuryproperty.com",
    "http://localhost:8080",
    "http://localhost:8081",
    "http://localhost:3000",
  ],
  credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));

app.use(
  session({
    secret: "sellanyhome",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000, secure: true }, // 7 days
  })
);

const passport = require("passport");

const User = require("../model/user.js"); // User Model

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

// To use with sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  //console.log('Request: ' + req.body);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );

  next();
});

app.use("/api/categories", categoryRoutes);
app.use("/api/listing", listingRoutes);
app.use("/api/property", propertyRoutes);
app.use("/api/search", listingSearchRoutes);
app.use("/api/neighbour", neighbourRoutes);
app.use("/api/exclusive", exclusiveRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/agent", agentRoutes);
// app.use("/api/logout", logoutRoutes);
app.use("/api", loginRoutes);
app.use("/api/user", userRoutes);
app.use("/api/blogs", blogRoutes);

app.post("/api/logout", (req, res, next) => {
  res.clearCookie("connect.sid"); // clear the session cookie
  req.logout(function (err) {
    // logout of passport
    req.session.destroy(function (err) {
      // destroy the session
      res.send(); // send to the client
    });
  });
});

// This middleware catches all other routes and returns a 404 error
// app.use((req, res, next) => {
//   const indexPath = path.join(__dirname, "../frontend/dist", "index.html");
//   res.status(200).sendFile(indexPath);
// });

module.exports = app;
