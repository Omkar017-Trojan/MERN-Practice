const mongoose = require('mongoose');

const schema = mongoose.schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    membershipType: {
        type: String,
        required: true
    },
    joinDate: {
        type: String,
        required: true
    },
    booksIssued: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true
    }
},{timeStamps: true})

module.exports = mongoose.model('User',userSchema);