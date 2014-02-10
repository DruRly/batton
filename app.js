var express = require('express');
var request = require('request');
var fs      = require('fs');
var app     = express();

app.use(express.bodyParser());

app.configure(function(){
  app.use('/public', express.static(__dirname + '/public'));
});

app.post('/upload', function(req, res){
  var url           = req.body.url;
  var name          = req.body.name;
  var imagePath     = './public/images/' + name
  var writeStream   = fs.createWriteStream(imagePath);
  var imageBasePath = req.protocol + "://" + req.get('host') + '/public/images/';

  request(url).pipe(writeStream);

  writeStream.on('open', function(){
    console.log('creating ' + imagePath);
  });

  writeStream.on('close', function(){
    res.send(imageBasePath + name);
  });
});

app.listen(8080);
