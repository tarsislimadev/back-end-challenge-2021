const app = require('./app')

const server = require('http').createServer((request, response) => {
  let data = ''
  request.on('data', (chunk) => data += chunk)
  request.on('end', () => app.handler(request, data).end(response))
})

server.listen(80)
