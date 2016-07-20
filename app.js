var express = require('express');
var twitterApp = express();

var chalk = require('chalk');


twitterApp.get('/', function (req, res) {
  res.send(chalk.blue('Hello') + 'World' + chalk.red('!'));
});

twitterApp.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

twitterApp.use('/news',function(req,res){
res.send("news indormation");
});

twitterApp.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
})