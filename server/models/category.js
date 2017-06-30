var mongoose = require('mongoose');

const CategoryScheme = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'field name is required']
    }
});

module.exports = mongoose.model('Category', CategoryScheme);