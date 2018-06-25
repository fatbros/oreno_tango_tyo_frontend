const express = require('express')
const next = require('next')
const proxy = require('http-proxy-middleware')
const modifyResponse = require('node-http-proxy-json')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const authorizationUrlProxy = proxy('/api/google/authorization_url', {
  target: 'http://python:5000',
  changeOrigin: true,
  onProxyRes: function(proxyRes, req, res) {
    modifyResponse(res, proxyRes, body => {
      try {
        delete body.state
        return body
      } catch (e) {}
    })
  }
})


app
  .prepare()
  .then(() => {
    const server = express()

    server.use(express.static('public'))

    server.use(authorizationUrlProxy)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
