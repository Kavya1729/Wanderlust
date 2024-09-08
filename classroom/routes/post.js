const express = require("express");
const router = express.Router();

//POST
//Index route 
router.get("/",(req,res)=>{
    res.send("Get for Posts");
});

//SHOW POSTS
router.get("/:id",(req,res)=>{
    res.send("Get for post id");
});

//POST 
router.post("/",(req,res)=>{
    res.send("POST");
});

//DELETE 
router.delete("/:id",(req,res)=>{
    res.send("Delete for post id");
});

module.exports = router