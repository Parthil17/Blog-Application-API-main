const BlogPost = require('../models/BlogPost');

// Add a new blog post
exports.createBlogPost = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const blogPost = new BlogPost({ title, content, author });
        await blogPost.save();
        res.status(201).json(blogPost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all blog posts with author details
exports.getAllBlogPosts = async (req, res) => {
    try {
        const blogPosts = await BlogPost.find().populate('author', 'name email');
        res.json(blogPosts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single blog post by ID with author details
exports.getBlogPostById = async (req, res) => {
    try {
        const blogPost = await BlogPost.findById(req.params.id).populate('author', 'name email');
        if (!blogPost) return res.status(404).json({ error: 'Blog post not found' });
        res.json(blogPost);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a blog post
exports.deleteBlogPost = async (req, res) => {
    try {
        const blogPost = await BlogPost.findByIdAndDelete(req.params.id);
        if (!blogPost) return res.status(404).json({ error: 'Blog post not found' });
        res.json({ message: 'Blog post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
