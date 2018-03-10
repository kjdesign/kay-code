var express = require('express');
var app = express();
var port = 3000;
init();
// console.log('hello world');



//Initializes application.
function init()
{
  console.log('initalize application');

  app.use(function(req,res)
{
  console.log('called endpoint');
  console.log('responding to request');
  res.send('hello world');
  res.end(); //ends response to user
  console.log('successfully responded to request at ' + new Date());
})

  app.listen(port, function() {
    console.log('listening on port ',port, 'go to localhost:' + port)
  });
}
