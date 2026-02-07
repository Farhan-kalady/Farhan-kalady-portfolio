const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    date: { type: String },
    category: { type: String, enum: ['Technical', 'Academic', 'Competitions'], default: 'Technical' },
    imageUrl: { type: String },
    pdfUrl: { type: String },
    highlight: { type: Boolean, default: false } // For "Digital Vault" highlights
}, { timestamps: true });

module.exports = mongoose.model('Certificate', certificateSchema);
