const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: { type: String, minlength: 10, required: true },
    content: { type: String, minlength: 100, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comments: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    publishedAt: { type: Date, default: Date.now, required: false},
});

module.exports= mongoose.model('Blog', BlogSchema);