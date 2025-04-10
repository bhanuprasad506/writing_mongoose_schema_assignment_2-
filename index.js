const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./schema');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/blogApp')
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Example route to create a blog
app.post('/blogs', async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
