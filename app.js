var express = require('express');
var twitterApp = express();

var chalk = require('chalk');

var swig  = require('swig');


twitterApp.get('/', function (req, res) {
 res.render( 'index', {title: 'Hall of Fame', people: people} );
});



twitterApp.use('/news',function(req,res){
res.send("news information");
});

twitterApp.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
});


var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

twitterApp.engine('html', swig.renderFile);

twitterApp.set('view engine', 'html');
twitterApp.set('views', __dirname + '/views');

twitterApp.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


