require('dotenv').config()

const express = require('express');

const app = express()

const port = 3000

app.get('/', (req,res) => {
    res.send('hello, have some chai!')
})

app.listen(process.env.PORT, () => {
    console.log('Example app listening on port ${port}')
})