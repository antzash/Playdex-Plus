const AuthModel = require("../models/Auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const getAllUsers = async (req, res) => {
  try {
    const users = await AuthModel.find();

    const outputArray = [];
    for (const user of users) {
      outputArray.push({ email: user.email, role: user.role });
    }

    res.json(outputArray);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error get users" });
  }
};

const register = async (req, res) => {
  try {
    //1. check duplicates:
    const auth = await AuthModel.findOne({ email: req.body.email });
    if (auth) {
      return res.status(400).json({ status: "error", msg: "duplicate email" });
    }
    //2. hash password:
    const hash = await bcrypt.hash(req.body.password, 12);
    //3. store
    await AuthModel.create({
      email: req.body.email,
      hash,
      role: req.body.role || "user",
    });
    res.json({ status: "ok", msg: "user created" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error register" });
  }
};

const login = async (req, res) => {
  try {
    //1. get user:
    const auth = await AuthModel.findOne({ email: req.body.email });
    if (!auth) {
      return res.status(400).json({ status: "error", msg: "no authorized" });
    }
    //2.compare hash:
    const result = await bcrypt.compare(req.body.password, auth.hash);
    if (!result) {
      console.error("email or password error");
      return res.status(401).json({ status: "error", msg: "login fail" });
    }
    //3. create tokens:
    const claims = {
      email: auth.email,
      role: auth.role,
    };
    const access = jwt.sign(claims, process.env.ACCESS_SECRET, {
      expiresIn: "20m",
      jwtid: uuidv4(),
    });
    const refresh = jwt.sign(claims, process.env.REFRESH_SECRET, {
      expiresIn: "30d",
      jwtid: uuidv4(),
    });
    res.json({ access, refresh });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error login" });
  }
};

const refresh = async (req, res) => {
  try {
    const decoded = jwt.verify(req.body.refresh, process.env.REFRESH_SECRET);

    const claims = {
      email: decoded.email,
      role: decoded.role,
    };
    const access = jwt.sign(claims, process.env.ACCESS_SECRET, {
      expiresIn: "20m",
      jwtid: uuidv4(),
    });
    res.json({ access });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error refresh" });
  }
};

module.exports = { getAllUsers, register, login, refresh };
