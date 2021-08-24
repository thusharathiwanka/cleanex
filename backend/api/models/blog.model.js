const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    topic:{type: String, require: true, trim:true },
    description:{type: String, require: true, trim:true},
    content:{type: String, require: true, trim:true},
    date:{type: String, require: true, trim:true},
    name:{type: String, require: true}
})

const Blog = mongoose.model("blogs", BlogSchema);

module.exports = Blog;