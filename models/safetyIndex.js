//Thank you codingleft.com for presenting a very useful template that I was able to leverage for this!
//https://www.codingdeft.com/posts/react-authentication-mern-node-passport-express-mongo/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SafetySchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: ''
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    ranking: {
        type: Number,
        required: true
    }
    }, {
        timestamps: true
});

module.exports = mongoose.model("SafetySchema", SafetySchema);