const express = require('express')
const app = express()
const PORT = process.env.PORT || 3002
const routes = require("./routes")

/**
 * Start server listening to outside source
 */
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

/**
 * Middleware
 */
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

/**
 * All routes
 */
app.use(routes)