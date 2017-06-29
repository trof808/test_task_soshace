var mongoose = require('mongoose');

const ItemScheme = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'field name is required']
    },
    purchase_pice: {
        type: String,
        required: [true, 'field email is required']
    },
     selling_price: {
        type: String,
        required: [true, 'field password is required']
     },
     category: {
         type: String,
         default: 'Без категории'
     }
});

module.exports = mongoose.model('Item', ItemScheme);