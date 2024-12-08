const express = require('express');
const routers = express.Router();
const content = require('../content');
const post= content.blogPosts; //Array di oggetti


//Index
routers.get("/", (req, res)=>{
    const bacheca ={
        post,
        tot : post.length
    };
    res.json(bacheca);
});

//Show
routers.get("/:id", (req, res)=>{
    const postId = req.params.id;
    let answer = "L'Id inserito non è valido";
    for(let i =0; i<post.length; i++){
        if (post[i].id==postId){
            answer = post[i];            
        }
    }
    res.json(answer);
});

//Create
routers.post("/", (req, res)=>{
    res.json('Nuovo post creato');
});

//Update
routers.put("/:id", (req, res)=>{
    const postId = req.params.id;
    res.json(`È stato aggiornato completamente il post con id:${postId}`);
});

//Modify
routers.patch("/:id", (req, res)=>{
    const postId = req.params.id;
    res.json(`È stato aggiornato parzialmente il post con id:${postId}`);
});

//Destroy
routers.delete("/:id", (req, res)=>{
    const postId = req.params.id;
    res.json(`È stato eliminato il post con id:${postId}`);
});



module.exports = routers;