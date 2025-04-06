require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // Middleware for JSON parsing

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.send('Blog API is running...');
});

// Import routes
const authorRoutes = require('./routes/authorRoutes');
const blogRoutes = require('./routes/blogRoutes');

app.use('/authors', authorRoutes);
app.use('/blogposts', blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
