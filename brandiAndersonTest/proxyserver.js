const express = require('express')
const app = express()
const proxy =require('http-proxy-middleware')

const filter = function(pathname, req) {
  return(pathname.match('^/') && req.method === 'GET')
}
function onProxyRes(proxyRes, req, res) {
  delete proxyRes.headers['content-security-policy']
  delete proxyRes.headers['x-frame-options']
}
app.use('/', proxy(filter, {
  target:'https://cpanel.com',
  changeOrigin: true,
  onProxyRes: onProxyRes
  })
)
app.listen(3000, () => {
  console.log('You know nothing Jon Snow')
})
