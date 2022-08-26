const restify = require('restify');
const server = restify.createServer();
const PORT = process.env.PORT
const cors = require('./cors')

server.pre(cors.preflight)
server.use(cors.actual)

  server.use(restify.plugins.bodyParser({
    mapParams:true,
    mapFiles:false,
    overrideParams:false,
}), )




require('dotenv').config()

 module.exports = {server,PORT};