const users = require("../models/User");

// Sign up
exports.signup = (req, res) => {
  const { username, password } = req.body;
  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ message: "Username already exists" });
  }
  users.push({ username, password });
  res.status(201).json({ message: "User registered successfully" });
};

// Sign in
exports.signin = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password,
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }
  res.status(200).json({ message: "Login successful", username });
};
