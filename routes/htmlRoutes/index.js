const router = require("express").Router()
const path = require('path')

router.get("/",(req,res)=>{
    //TODO HELP
    console.log("Helloasdf")
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})

router.get("/notes",(req,res)=>{
    console.log("Hello")
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
})

module.exports = router