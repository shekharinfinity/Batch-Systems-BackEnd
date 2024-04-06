const Tag = require('../models/tag');

exports.createTag = async (req, res) => {
    try {
        const { name } = req.body;
        const tag = await Tag.create({ name });
        res.status(201).json(tag);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
