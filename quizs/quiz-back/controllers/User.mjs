import User from "../models/User.mjs";
import sendMail from "./SendEmail.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SALT = process.env.SALT;
// signUp  function
export const createUser = async (req, res) => {
  const { fullName, email, password, age } = req.body;
  console.log(req.body);
  User.findOne({ email })
    .then((user) => {
      if (user) {
        res.json({ exist: true, message: "user already exists" });
        console.log(user);
      } else {
        const verification_code = Math.random()
          .toString(10)
          .substring(2, 2 + 4);

        sendMail(email, "Quiz", verification_code);
        res.json({
          exist: false,
          verification_code: verification_code,
          user: req.body,
        });
      }
    })
    .catch((err) => console.log(err.message));
};

// verification code function
export const verification = (req, res) => {
  const { verification_code, user, user_code } = req.body;

  if (user_code === verification_code) {
    const users = new User(user);

    bcrypt.hash(user.password, SALT, (err, hash) => {
      if (err) {
        console.log(err);
      }
      users.password = hash;
      console.log(hash);
      users.save().then((result) => {
        console.log("User added", result);
        res.json({
          verification: true,
          message: "user added successfully",
        });
      });
    });
  } else {
    res.json({ verification: false, message: "Not Corect code" });
  }
};


// login function

export const login = (req, res) => {
    const { email, password } = req.body;
  console.log(req.body);
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.json({ error: true, message: "User Not Found " });
        }
  
        bcrypt.compare(password, user.password).then((isMatch) => {
          if (!isMatch) {
            return res.json({ error: true, message: "Password Incorrect" });
          }
          const tokenPayload = {
            email: user.email,
            userId: user._id,  
          };
          const token = jwt.sign(tokenPayload, process.env.JWT_SECRET);
          res.json({ error: false, message: "login success", token });
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({ message: "An error occurred" });
      });
  };

  export const getUser = (req, res) => {
    User.findOne({ _id: req.user.userId })
      .then((users) => {
        res.json({ userName: users.fullName});
      })
      .catch((err) => console.log(err));
  };