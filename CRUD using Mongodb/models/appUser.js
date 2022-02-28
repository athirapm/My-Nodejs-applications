const mongoose = require('mongoose');

const appUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isPaidMember: {
        type: Boolean,
        required: true,
        default: false
    }
})
module.exports = mongoose.model('appUserModel', appUserSchema);