const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: { type: String, minlength: 10, required: true },
    extract: { type: String, required: false },
    content: { type: String, minlength: 100, required: true },
    url: { type: String, required: true },
    authorId: { type: String, ref: 'User', required: true },
    tags: {type: Array, required: false},
    commentCount: { type: Number, min: 0, max: 99999, required: false },
    publishedAt: { type: Date, default: Date.now, required: false},
});

module.exports= mongoose.model('Blog', BlogSchema);