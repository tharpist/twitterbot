//app.js

var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);


//Random number
var randomnumber = require("randomstring");
var number = randomnumber.generate({
charset: 'numeric',
length: 2
});

//Random String
var  randomstring = require("randomstring");
var test = randomstring.generate({
length: number,
capitalization: 'lowercase',
charset: 'alphabetic'
});








//Tweet Something

T.post('statuses/update', {status:test},   function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
});


