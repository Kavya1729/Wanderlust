const express = require("express");
const router = express.Router();


//Index route -user
router.get("/",(req,res)=>{
    res.send("Get for Users");
});

//SHOW USERS
router.get("/:id",(req,res)=>{
    res.send("Get for user id");
});

//POST USERS
router.post("/",(req,res)=>{
    res.send("POST for users");
});

//DELETE USERS
router.delete("/:id",(req,res)=>{
    res.send("Delete for user id");
});

module.exports = router;