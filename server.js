const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('./public'));

app.use('*', function(req,res){
  res.sendFile('index.html', {root: "./public"});
});

app.listen(PORT, function () {
  console.log('Listening in port:' + PORT);
})