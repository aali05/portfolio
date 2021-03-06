var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

var port = process.env.PORT || 3004;
app.listen(port, function() {
  console.log('up 3004');
});
