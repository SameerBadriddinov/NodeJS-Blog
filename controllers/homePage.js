const Post = require("../models/Post");

module.exports = async (req, res) => {
  console.log(req.session);
  const posts = await Post.find().populate("author", "username");
  console.log(posts);
  res.render("index", {posts});
}