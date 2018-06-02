const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const body_parser = require('body-parser');
app.use(express.static('public'));
app.use(body_parser.urlencoded({extended: false}));

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true
});

app.get('/', function(req, resp){
    resp.render('index.html');
});


app.listen(8080, function () {
  console.log('Listening on port 8000');
});