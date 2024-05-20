const express = require('express')
const app = express()
const port = 3000
require('./connection/connection')
const authRoute = require('./routes/auth')

app.use(express.json())

app.use('', authRoute )

app.get('/', (req, res)=>{
    res.send("Server started Successfully")
})

app.listen(port, ()=>{
    console.log(`server connected at ${port}`)
})