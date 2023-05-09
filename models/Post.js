const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title:String,
    detail:String,
    dateCreted7:{
        type:Date,
        default:Date.now
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
