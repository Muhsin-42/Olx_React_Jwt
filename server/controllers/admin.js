const express = require("express");
const User = require("../models/user");
const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  adminLogin: async (req, res) => {
    try {
      const admin = await Admin.findOne({ email: req.body.email });
      if (admin) {
        const isPasswordValid = await bcrypt.compare(
          req.body.password,
          admin.password
        );
        if (isPasswordValid) {
          const adminToken = jwt.sign(
            { username: admin.username, email: admin.email },
            "myWebAppSecretKey123"
          );
          // return res.json({ status: 'ok', user: true })
          return res
            .status(200)
            .json({
              message: "Login Sucess",
              adminToken,
              admin: admin.username,
            });
        } else {
          return res.status(403).json({ message: "Password Incorrect" });
        }
      } else {
        return res.status(500).json({ message: "Email Incorrect" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "something went wrong" });
    }
  },
  getUsers: async (req, res) => {
    try {
      const user = await User.find().select("-password");
      if (!user)
        return res
          .status(500)
          .json({ message: "didnt got users from database" });

      res.status(200).json({ message: "Success", user });
    } catch (error) {
      res.status(500).json({ message: "something went wrong" });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.id }).select(
        "-password"
      );
      if (!user)
        return res
          .status(500)
          .json({ message: "didnt got users from database" });
      res.status(200).json({ message: "Sucess", user });
    } catch (error) {
      res.status(500).json({ message: "something went wrong" });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const deleteUser = await User.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: "Sucess" });
    } catch (error) {
      res.status(500).json({ message: "something went wrong" });
    }
  },
  updateUser: async (req, res) => {
    const { username, email } = req.body;
    try {
      const update = await User.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            username,
            email,
          },
        }
      );
      res.status(200).json({ message: "Sucess" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "something went wrong" });
    }
  },
  searchUser: async (req, res) => {
    try {
      const users = await User.find({
        $or: [
          {
            username: { $regex: req.params.key },
          },
          {
            email: { $regex: req.params.key },
          },
        ],
      });
      res.status(200).json({ message: "Sucess", users });
    } catch (error) {
      res.status(500).json({ message: "something went wrong" });
    }
  },
  verifyToken: async (req, res) => {
    const Token = req.body.Token;
    try {
      const decoded = jwt.verify(Token, "myWebAppSecretKey123");
      const email = decoded.email;
      const user = await Admin.findOne({ email: email });
      return res
        .status(200)
        .json({ message: "token valid", email: user.email });
    } catch (error) {
      console.log(error);
      res.json({ status: "error", error: "invalid token" });
    }
  },
};
