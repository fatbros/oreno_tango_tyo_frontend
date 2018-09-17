const proxy = require('http-proxy-middleware')
const modifyResponse = require('node-http-proxy-json')

module.exports = proxy('/api/login', {
  target: 'http://python:5000',
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
    const body = req.body
    const bodyData = JSON.stringify(body)

    proxyReq.setHeader('Content-Type', 'application/json')
    proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData))

    proxyReq.write(bodyData)
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
