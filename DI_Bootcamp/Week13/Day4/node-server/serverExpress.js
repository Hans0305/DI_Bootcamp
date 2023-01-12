const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('hello, welcome to my server')
})

app.listen(3001)