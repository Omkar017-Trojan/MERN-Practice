const mongoose = require('mongoose');

const schema = mongoose.schema();

const bookSchema = new schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    publishedYear: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
},{
    timeStamps: true
})

module.exports = mongoose.model('book',bookSchema);