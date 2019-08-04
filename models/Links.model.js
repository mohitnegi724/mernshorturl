const mongoose = require('mongoose');
const {Schema} = mongoose;
const shortURLSchema = new Schema({
    originalLink: {
        type: String,
        required: true
    },
    shortlinkid: {
        type: String,
        unique: true
    },
    createdDate: {
        type: String,
        required: true
    },
    identity: {
        type: String
    }
});
const Links = mongoose.model('shortlinks', shortURLSchema);


module.exports = Links;