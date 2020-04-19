const express = require('express');
const app = express();
const routesController = require('./routes');
const path = require('path');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/../../page/'));

app.get('/page', (req,res) =>{
  res.sendFile(path.join(__dirname + '/../../page/index.html'));
});


app.use(express.json());
app.use(routesController);

app.listen(process.env.PORT || 3333, () => console.log('server running.'))
