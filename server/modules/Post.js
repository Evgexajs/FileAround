const {model, Schema, ObjectId} = require('mongoose')

const Post = new Schema({
    name: {type: String, required: true},
    text: {type: String},
    image: {type: String},
    date: {type: Date, default: Date.now()},
    user: {type: ObjectId, ref: 'User'},
})


module.exports = model('Post', Post)