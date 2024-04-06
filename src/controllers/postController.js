const Post = require('../models/post');

exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await Post.create({ title, content });
        res.status(201).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
