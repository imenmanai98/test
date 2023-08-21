const mongoose = require('mongoose')

const articleSchema = mongoose.Schema(
    {  name : {
         type:String,
         required:true
        },
        date : {
            type:Date,
            required: true
        },
        content : {
            type: String,
            required : false
        }

    },
    {
        timestamps : true
    }
)
const Article = mongoose.model('Article',articleSchema);
module.exports = Article;