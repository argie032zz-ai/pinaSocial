const posts = require("../models/Post");

// Create Post
exports.createPost = (req, res) => {
  const { username, content } = req.body;
  if (!username || !content) {
    return res.status(400).json({ message: "Username and content required" });
  }
  const post = { username, content, createdAt: new Date() };
  posts.push(post);
  res.status(201).json({ message: "Post created", post });
};

// Get All Posts
exports.getPosts = (req, res) => {
  res.json(posts);
};
