const express = require('express')
const next = require('next')

const session = require('express-session')
const bodyParser = require('body-parser')

const authorizationUrlProxy = require('./proxy/authorization_url')
const credentialProxy = require('./proxy/credentials')
const passwordProxy = require('./proxy/password')
const loginProxy = require('./proxy/login')

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
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        cookie: {
          maxAge: 30 * 60 * 1000
        }
      })
    )

    server.use(express.static('public'))

    server.use(authorizationUrlProxy)
    server.use(credentialProxy)
    server.use(passwordProxy)
    server.use(loginProxy)

    server.get('logout', (req, res) => {
      req.session.destroy()
      res.redirect('/')
    })

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
