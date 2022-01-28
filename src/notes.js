const fs = require('fs/promises')
const path = require('path')
const uuid=require('uuid-random')

/**
 * retrieves the notes in the database and returns the
 * @returns {Promise<string>}
 */
const getNotes = async () => {
    try {
        const database = await fs.readFile(path.join(__dirname, "../db/db.json"),'utf8')
        return JSON.parse(database)
    } catch (e) {
        console.log("ERROR")
        console.log(e)
    }
}

/**
 * Saves the note data to the database
 * @param noteData
 * @returns {Promise<void>}
 */
const saveNote = async (noteData) => {
    try{
        let database = await getNotes()
        database.push({...noteData,id:uuid()})
        await fs.writeFile(path.join(__dirname, "../db/db.json"),JSON.stringify(database))
    }catch (e) {
        console.log("ERROR")
        console.log(e)
    }
}

/**
 * filters the database array and removes the note with the id of the note to remove
 * @param id
 * @returns {Promise<void>}
 */
const deleteNote = async (id) => {
    try{
        const database = await getNotes()
        const newDatabase = database.filter(note=>{
            if(note.id === id){
                return false
            }
            return true
        })

        await  fs.writeFile(path.join(__dirname,"../db/db.json"),JSON.stringify(newDatabase))
    }catch (e) {
        console.log("ERROR")
        console.log(e)
    }
}

module.exports = {getNotes, saveNote, deleteNote}