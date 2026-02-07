const express = require('express');
const router = express.Router();
const Certificate = require('../models/Certificate');

// Get all certificates
router.get('/', async (req, res) => {
    try {
        const certificates = await Certificate.find().sort({ createdAt: -1 });
        res.json(certificates);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new certificate (Admin route - security to be added)
router.post('/', async (req, res) => {
    const certificate = new Certificate({
        title: req.body.title,
        issuer: req.body.issuer,
        date: req.body.date,
        category: req.body.category,
        imageUrl: req.body.imageUrl,
        pdfUrl: req.body.pdfUrl,
        highlight: req.body.highlight
    });

    try {
        const newCertificate = await certificate.save();
        res.status(201).json(newCertificate);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
