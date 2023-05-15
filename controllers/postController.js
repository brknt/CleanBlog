const Post = require('../models/Post');

const getAllPost = async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
};

const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
};

const createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

const updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();
  res.redirect(`/posts/${req.params.id}`);
};

const deletePost = async (req, res) => {
  await Post.findByIdAndRemove({ _id: req.params.id }); // mongodb veritabanından veriyi siler
  res.redirect('/');
};
module.exports = {
  getAllPost,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
