const express = require('express');
const routers = express.Router();
const content = require('../content');
const post= content.blogPosts;

routers.get('/', (req, res)=>{
    res.send(post);
})

module.exports = routers;