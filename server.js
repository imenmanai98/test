const express = require('express') //pour importer la bib express
const app = express()

const mongoose = require('mongoose');

// declarer routing
var article = require('./routes/articles')
app.use(express.json())

app.use('/api/',article)

//connect to database
mongoose.set("strictQuery",false)
mongoose.connect('mongodb+srv://root:AUdHEHt1spNGh2XT@cluster0.lz8czvf.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to mongoDB')
    app.listen(3000,()=>{
             console.log('PROJECT  is running on port 3000')
         })
   
}).catch((error)=>{
    console.log(console.log(error))
})