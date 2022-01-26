const express = require('express')
const app = express()
const PORT = process.env.PORT || 3002
const routes = require("./routes")

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

app.use(routes)