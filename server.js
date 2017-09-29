const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./server-config/api/routes/listRoutes')

const server = new express()

const port = process.env.PORT || 3000;

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

routes(server)

server.listen(port)

console.log('todo list RESTful API server started on: ' + port);