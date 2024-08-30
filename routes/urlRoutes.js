const express = require('express');
const { shortenUrl, redirectUrl } = require('../controllers/urlController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/shorten', protect, shortenUrl);
router.get('/:shortUrl', redirectUrl);

module.exports = router;
