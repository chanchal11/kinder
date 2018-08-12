const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    firstName: String,
    lastName: String,
    lid: String,
    thumbnail: String,
    location: String,
    numConns: String,
    headline : String,
    publicProfileUrl /*publicProfile*/ : String
    
});

const User = mongoose.model('user', userSchema);

module.exports = User;
