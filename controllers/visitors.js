import { VisitorModel } from '../models/VisitorModel.js';

export const getAllVisitor = async (req, res) => {
  try {
    const posts = await VisitorModel.find();
    res.status(200).json(posts);
    console.log(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const insertVisitor = async (req, res) => {
  try {
    const newPost = req.body; // body is the data from frontend

    const post = new VisitorModel(newPost);
    await post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateVisitor = async (req, res) => {
  try {
    const updatePost = req.body;

    const post = await VisitorModel.findOneAndUpdate(
      { _id: updatePost._id },
      updatePost,
      { new: true }
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const searchById = async (req, res) => {
    try {
      // Extract the post ID from the route parameters (req.params)
      const postId = req.params.id;
      console.log(postId);
      // Use findById to search for the post by _id
      const post = await VisitorModel.findById(postId);
  
      // If the post is not found, return a 404 status
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      // If the post is found, return it in the response
      res.status(200).json(post);
    } catch (err) {
      // If there is an error, send a 500 response with the error message
      res.status(500).json({ error: err.message });
    }
  };