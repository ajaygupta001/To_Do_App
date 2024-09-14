const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const EmployeeModel = require("../models/Employee");

// Register controller
exports.register = (req, res) => {
  const { name, email, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) => {
      EmployeeModel.create({ name, email, password: hash })
        .then((employee) => res.json(employee))
        .catch((err) => res.status(400).json({ error: err.message }));
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

// Login controller
exports.login = (req, res) => {
  const { email, password } = req.body;

  EmployeeModel.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json("No Record Existed");
      }

      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          const token = jwt.sign({ email: user.email }, "jwt-secret-key", {
            expiresIn: "1d",
          });
          res.cookie("token", token, { httpOnly: true });
          return res.json("Login Successful");
        } else {
          return res.status(400).json("The password is incorrect");
        }
      });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

// Middleware to verify user
exports.verifyUser = (req, res, next) => {
  const token =
    req.cookies.token || req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.status(401).json("Access Denied. No Token Provided");
  }
  jwt.verify(
    token,
    process.env.JWT_SECRET || "jwt-secret-key",
    (err, decoded) => {
      if (err) {
        return res.status(403).json("Invalid token");
      }
      req.user = decoded;
      next();
    }
  );
};
