const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Submit a contact message
router.post('/', async (req, res) => {
    const message = new Message({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });

    try {
        const newMessage = await message.save();
        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Admin: Get all messages
router.get('/', async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
