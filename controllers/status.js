'use strict'

const Package = require('../package.json')
const shell = require('shelljs')
const urlBackend = '/Users/alexmejicanos/.bitnami/stackman/machines/xampp/volumes/root/htdocs/backend'

module.exports = {
    //Adding the functions
    status:(request, reply) => {
        reply({
            project: Package.name,
            version: Package.version,
            author: Package.author,
            license: Package.license
        })
    },
    deploy:(request, reply) => {

        shell.cd(urlBackend)
        shell.exec('git pull origin develop', (code, stdout, stderr) => {
            if (code !== 0) {
                reply({
                    code: code,
                    message: stdout
                })
            } else {
                reply({
                    code: code,
                    message: stdout
                })
            }
        })
    },
    routes:(request, reply) => {
        shell.cd(urlBackend)
        shell.exec('php artisan route:list', (code, stdout, stderr) => {
            if (code !== 0) {
                reply({
                    code: code,
                    message: stdout
                })
            } else {
                reply.view('routes', {data: stdout})
                
            }
        })
    }
}