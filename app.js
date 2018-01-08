//app.js

var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
var randomnumber  = require("randomnumber");
randomnumber.generate();
var  randomstring = require("randomstring");
var test =randomstring.generate(randomnumber);








//Tweet Something

T.post('statuses/update', {status:test},   function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
});


