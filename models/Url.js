const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

const UrlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true, default: () => nanoid(7) },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Url', UrlSchema);

