const express = require('express')
const app = express()
const proxy =require('http-proxy-middleware')


app.use('/',proxy({target:'https://www.flickr.com/services/feeds/photos_public.gne?tags=punctuation,atsign&format=json', changeOrigin: true}) )
app.listen(3000)
