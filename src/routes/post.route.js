const Router = require('express');
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require('../services/post.service');
const { validateID, validateTitle, validateContent } = require('../validate');

const posts = Router();

posts.get('/', getPosts);

posts.get('/:id', validateID, getPost);

posts.post('/', validateTitle, validateContent, createPost);

posts.put('/:id', validateID, validateTitle, validateContent, updatePost);

posts.delete('/:id', validateID, deletePost);

module.exports = posts;
