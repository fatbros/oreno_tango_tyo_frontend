const proxy = require('http-proxy-middleware')

module.exports = proxy('/api/password', {
  target: 'http://python:5000',
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
    const body = req.body
    const sessionObjectid = req.session.objectid
    const password = req.body.password || ''

    body.objectid = sessionObjectid
    const bodyData = JSON.stringify(body)

    proxyReq.setHeader('Content-Type', 'application/json')
    proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData))

    proxyReq.write(bodyData)
    proxyReq.end()
  }
})
