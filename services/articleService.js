const articleModel = require("../models/Articles")
//this function is for creating a new article in the database : As a user, I must enter the name , the content and the date of the article
var  createArticle = async(req,res)=>{
    try{ 
        const article = await articleModel.create(req.body);
        res.status(200).json(article)
     }
     catch(error)
     {
         console.log(error.message);
         res.status(500).json({message: error.message})
     }

     res.send(req.body)

}
    //this function is for display articles from database : Throught this function , I can filter the articles'table by indicate the name
    // or the date or the both also it can limit the number of line
 var findArticleByFilter = async (req,res)=>{
    try{
        
        //  this code will display all articles 
         let query = articleModel.find();
        /**
         * in this if block , I test if filter (params) is not empty. Then I recuperate the data and I add where clause to query  in order to 
         * filter 
         * 
         */
         if(req.query.filter)
         {
            const filter = JSON.parse(req.query.filter);
            query  = query.where(filter);
         }   
          /**
         * in this if block , I test if limit  (params) is not empty. Then I recuperate the limit and I add limit clause to query  in order to 
         * fix the number of lines. 
         * 
         */
         if( req.query.limit){
            const limit = parseInt(req.query.limit);
            query = query.limit(limit);
         }

    
        const articles = await query.exec();
        res.status(200).json(articles)
    }catch(error){
        res.status(500).json({message: error.message})
    }
 }


module.exports = {
    createArticle ,
    findArticleByFilter
}