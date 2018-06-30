const proxy = require('http-proxy-middleware')
const modifyResponse = require('node-http-proxy-json')

module.exports = proxy('/api/google/authorization_url', {
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
