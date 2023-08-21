const express = require('express');
var router = express.Router();
var articleService = require('../services/articleService')

router.get('/articles',articleService.findArticleByFilter)
router.post('/article',articleService.createArticle)

module.exports = router;