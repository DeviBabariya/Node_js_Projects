const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        available: {
            type: String,
            enum: ['In Stock', 'Out of Stock'],
        },
        image: {
            type: String,
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
);

module.exports = mongoose.model('Product', productSchema);