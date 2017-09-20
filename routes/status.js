'use strict'

const Status = require('../controllers/status')

exports.register = (server, options, next) => {
    server.route({
        path: '/',
        method: 'GET',
        handler: Status.status
    })

    server.route({
        path: '/deploy',
        method: 'GET',
        handler: Status.deploy
    })

    server.route({
        path: '/routes',
        method: 'GET',
        handler: Status.routes
    })

    next()
}

exports.register.attributes = {
    name: 'status'
}

