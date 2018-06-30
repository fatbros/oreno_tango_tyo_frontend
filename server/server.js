const express = require('express')
const next = require('next')

const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const bodyParser = require('body-parser')

const authorizationUrlProxy = require('./proxy/authorization_url')
const credentialProxy = require('./proxy/credentials')
const passwordProxy = require('./proxy/password')

const sessionStore = new RedisStore({
  host: 'redis',
  port: 6379,
  resave: false,
  ttl: 60 * 30
})

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(bodyParser.json())
    server.use(
      bodyParser.urlencoded({
        extended: true
      })
    )

    server.use(
      session({
        key: 'dev.web',
        store: sessionStore,
        cookie: {
          maxAge: new Date(Date.now() + 1000 * 60 * 30),
          httpOnly: true
        },
        secret: 'test'
      })
    )

    server.use(express.static('public'))

    server.use(authorizationUrlProxy)
    server.use(credentialProxy(sessionStore))
    server.use(passwordProxy)

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
