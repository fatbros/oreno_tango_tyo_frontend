const express = require('express')
const bodyParser = require('body-parser');
const next = require('next')
const proxy = require('http-proxy-middleware')
const modifyResponse = require('node-http-proxy-json')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const url = require('url')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const authorizationUrlProxy = proxy('/api/google/authorization_url', {
  target: 'http://python:5000',
  changeOrigin: true,
  onProxyRes: (proxyRes, req, res) => {
    modifyResponse(res, proxyRes, body => {
      try {
        req.session.state = body.state

        delete body.state
        return body
      } catch (e) {}
    })
  }
})

const credentialProxy = proxy('/api/google/credentials', {
  target: 'http://python:5000',
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
    const referer = req.headers.referer || ''
    const { query } = url.parse(referer, true)
    const sessionState = req.session.state

    if (query.state === undefined || sessionState === undefined) {
      res.status(400).send({
        message:
          'invalid session status. Please try login processing from the beginning again'
      })
      return false
    }

    if (query.state !== sessionState) {
      res.status(400).send({
        message:
          'invalid session status. Please try login processing from the beginning again'
      })
      return false
    }

    const body = new url.URLSearchParams({
      callback_url: referer,
      state: sessionState
    }).toString()

    // Update header
    proxyReq.setHeader('content-type', 'application/x-www-form-urlencoded')
    proxyReq.setHeader('content-length', body.length)

    proxyReq.write(body)
    proxyReq.end()
  }
})

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())

    server.use(
      session({
        key: 'dev.web',
        store: new RedisStore({
          host: 'redis',
          port: 6379,
          resave: false
        }),
        cookie: {
          maxAge: new Date(Date.now() + 1000 * 60 * 10),
          httpOnly: true
        },
        secret: 'test'
      })
    )

    server.use(express.static('public'))

    server.use(authorizationUrlProxy)
    server.use(credentialProxy)

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
