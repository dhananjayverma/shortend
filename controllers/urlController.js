const Url = require('../models/Url');

const shortenUrl = async (req, res) => {
    const { originalUrl } = req.body;
    try {
        const url = new Url({ originalUrl, user: req.user.id });
        await url.save();
        res.json({ originalUrl: url.originalUrl, shortUrl: url.shortUrl });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



// const redirectUrl = async (req, res) => {
//     try {
//         const url = await Url.findOne({ shortUrl: req.params.shortUrl });
//         if (url) {
//             return res.redirect(url.originalUrl);
//         }
//         res.status(404).json({ error: 'URL not found' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };










const redirectUrl = async (req, res) => {
    try {
        const url = await Url.findOne({ shortUrl: req.params.shortUrl });
        console.log('Requested short URL:', req.params.shortUrl);

        if (url) {
            console.log(`Redirecting to: ${url.originalUrl}`);
            return res.redirect(url.originalUrl);
        }

        console.log('Short URL not found:', req.params.shortUrl);
        res.status(404).json({ error: 'URL not found' });
    } catch (err) {
        console.error('Error occurred during redirection:', err.message);
        res.status(500).json({ error: 'Server error, please try again later.' });
    }
};


module.exports = { shortenUrl, redirectUrl };


