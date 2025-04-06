const Author = require('../models/Author');

// Add a new author
exports.createAuthor = async (req, res) => {
    try {
        const { name, email } = req.body;
        const author = new Author({ name, email });
        await author.save();
        res.status(201).json(author);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
