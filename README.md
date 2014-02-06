##Batton

Node.JS Static File Server with an API for uploading


###Starting Server

<pre>
node app.js
</pre>

###Uploading

<pre>
var superagent = require('superagent')
var url = 'http://www.drurly.com/images/sinatra_screenshot.png'

request.post('http://localhost:5000/upload')
.send({ url: url, name: 'test.png' })
.end(callback)
</pre>

###Viewing Assets

Visit http://localhost:5000/public/images/test.png

###Testing

Run this command with the server started.

<pre>
jasmine-node spec/
</pre>
