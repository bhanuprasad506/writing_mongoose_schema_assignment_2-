const mongoose = require('mongoose');

// Comment Schema (Subdocument)
const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  commentedAt: {
    type: Date,
    default: Date.now,
  },
});

// Blog Post Schema
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      minlength: 50,
      trim: true,
    },
    author: {
      type: String,
      default: 'Anonymous',
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      default: 'General',
      trim: true,
    },
    likes: {
      type: [String], // Array of usernames
      default: [],
    },
    comments: {
      type: [commentSchema],
      default: [],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
