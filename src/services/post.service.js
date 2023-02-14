const {
  get,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} = require('../repositories/post.repository');
const { validationResult } = require('express-validator');

const getPosts = (req, res) => {
  try {
    const result = get();
    if (result) {
      return res.json(result);
    }
    return res.status(404).json({ error: 'Posts not found.' });
  } catch (error) {
    return res.status(500).json('error');
  }
};

const getPost = (req, res) => {
  try {
    const result = getOne(req.params.id);
    if (result) {
      return res.json(result);
    }
    return res.status(404).json({ error: 'Post not found.' });
  } catch (error) {
    return res.status(500).json('error');
  }
};

const createPost = (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const post = {
      title: req.body.title,
      content: req.body.content,
    };

    const result = createOne(post);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json('Error');
  }
};

const updatePost = (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const existingPost = getOne(req.params.id);
    if (!existingPost) {
      return res.status(404).json({ error: 'Post not found.' });
    }

    const post = {
      title: req.body.title,
      content: req.body.content,
    };

    const result = updateOne(req.params.id, post);
    return res.json(result);
  } catch (error) {
    return res.status(500).json('Error');
  }
};

const deletePost = (req, res) => {
  try {
    const existingPost = getOne(req.params.id);
    if (!existingPost) {
      return res.status(404).json({ error: 'Post not found.' });
    }

    const result = deleteOne(req.params.id);
    return res.json(result);
  } catch (error) {
    return res.status(500).json('Error');
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
