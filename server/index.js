require('dotenv').config()
const express = require('express')
const massive =require('massive')
const ctrl = require('./controller')
const app = express()

const { SERVER_PORT, CONNECTION_STRING} = process.env

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false}
}).then((dbInstance)=>{
    app.set('db',dbInstance)
    console.log("Running")
}).catch((err)=> console.log(err))

app.use(express.json())

app.get('/api/inventory', ctrl.getAll)
app.post('/api/product', ctrl.create)
app.delete('/api/product/:id', ctrl.delete)
app.put('/api/product/:id', ctrl.update)


app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} is here!`))