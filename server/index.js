const express = require('express')
const ctrl = require('./controller')

const app = express()

const port = 4000

app.use(express.json())

app.listen(port, ()=> console.log(`${port} is here!`))