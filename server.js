'use strict'

const Hapi = require('hapi')
const Path = require('path')
const Hoek = require('hoek')

//Create a server with a host and port
const server = new Hapi.Server()

server.connection({
    host: '0.0.0.0',
    port: '9090'
})

server.register([
    //Add the routes
    require('./routes/status'),
    require('vision')
], (err) => {
    if(err) {
        throw err;
    }
})

server.views({
    engines: {
        html: require('handlebars')
    },
    relativeTo: __dirname,
    path: './views'
});

//Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at ' + server.info.uri)
})