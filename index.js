const express = require('express')
const port = process.env.PORT || 3334
const server = express()
const middleware = require('./config/bulkMiddleware')
const routeMaker = require('./config/routeMaker')
const projectDb = require('./data/helpers/projectModel')
const actionsDb = require('./data/helpers/actionModel')

middleware(server)

server.use('/projects', routeMaker(projectDb, 'project'))
server.use('/actions', routeMaker(actionsDb, 'action'))
server.listen(port, () => console.log(`we hear you ${port}`));