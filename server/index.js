const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const router = require('./router')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true})

app.use(morgan('combined'))
app.use(bodyParser.json({type: '*/*'}))
router(app)

const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on : ', port)