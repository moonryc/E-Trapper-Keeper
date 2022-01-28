const router = require("express").Router()
const {getNotes, saveNote,deleteNote} = require("../../src/notes")

/**
 * api for geting all existing notes
 */
router.get('/notes',async (req,res)=>{
    res.json(await getNotes())
})

/**
 * Api for creating notes
 */
router.post('/notes',async (req,res)=>{
    await saveNote(req.body)
    res.sendStatus(200)
})

/**
 * api for deleting notes
 */
router.delete('/notes/:id',async (req,res)=>{
    await deleteNote(req.params.id)
    res.sendStatus(200)
})




module.exports = router