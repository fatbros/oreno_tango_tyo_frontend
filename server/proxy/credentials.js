const proxy = require('http-proxy-middleware')
const modifyResponse = require('node-http-proxy-json')
const url = require('url')

module.exports = proxy('/api/google/credentials', {
  target: 'http://python:5000',
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
    const referer = req.headers.referer || ''
    const { query } = url.parse(referer, true)
    const sessionState = req.session.state

    if (query.state === undefined || sessionState === undefined) {
      return res.status(400).send({
        message:
          'invalid session status. Please try login processing from the beginning again'
      })
    }

    if (query.state !== sessionState) {
      return res.status(400).send({
        message:
          'invalid session status. Please try login processing from the beginning again'
      })
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
  },
  onProxyRes: async (proxyRes, req, res) => {
    modifyResponse(res, proxyRes, body => {
      try {
        req.session.objectid = body.objectid
        delete body.objectid

        return body
      } catch (e) {}
    })
  }
})
