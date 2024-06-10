const express = require('express')

const router = require('./routes/router')

const app = express()

app.use('/', router)
const port = 5000;

const server = app.listen(port, () => {
    console.log(`Server running on ${port}`)
})