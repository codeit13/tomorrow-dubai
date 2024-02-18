const loginRouter = require("express").Router();

// const passport = require("../config/passport");

const jwt = require("jsonwebtoken");
const User = require("../model/user");

/**
 * Handles user login.
 */
loginRouter.post("/login", async (req, res, next) => {
  let { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }
  if (!existingUser || existingUser.password != password) {
    const error = Error("Wrong details please check at once");
    return next(error);
  }
  let token;
  try {
    //Creating jwt token
    token = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email,
      },
      "secretkeyappearshere",
      { expiresIn: "1h" }
    );
  } catch (err) {
    console.log(err);
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }

  res.status(200).json({
    success: true,
    data: {
      userId: existingUser._id,
      email: existingUser.email,
      token: token,
    },
  });
});

loginRouter.post("/signup", async (req, res, next) => {
  const { name, email, password } = req.body;
  const newUser = User({
    name,
    email,
    password,
  });

  try {
    await newUser.save();
  } catch {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }
  let token;
  try {
    token = jwt.sign(
      {
        userId: newUser.id,
        email: newUser.email,
      },
      "secretkeyappearshere",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }
  res.status(201).json({
    success: true,
    data: {
      userId: newUser.id,
      email: newUser.email,
      token: token,
    },
  });
});

loginRouter.get("/checkLogin", (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    //Authorization: 'Bearer TOKEN'
    if (!token) {
      res.status(200).json({
        success: false,
        message: "Error!Token was not provided.",
      });
    }
    //Decoding the token
    const decodedToken = jwt.verify(token, "secretkeyappearshere");
    res.status(200).json({
      success: true,
      data: {
        userId: decodedToken.userId,
        email: decodedToken.email,
      },
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: "Error!Something went wrong.",
    });
  }
});

module.exports = loginRouter;
