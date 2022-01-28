const router = require("express").Router()
const path = require('path')

/**
 * get notes page
 */
router.get("/notes",(req,res)=>{
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
})

/**
 * catch all redirects user to index.html
 */
router.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})

module.exports = router