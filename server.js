const express = require('express')

const PORT = 3000

const app = express()
const path = require('path')
const helmet = require('helmet');

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`)
});

app.use(express.static(path.join(__dirname, 'dist')))


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
});
