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


//is it a word
var dictionary = require('dictionary-en-us');
var nspell = require('nspell');
 
dictionary(function (err, dict) {
  if (err) {
    throw err;
  }
 
  var spell = nspell(dict);
var isword = " IS A WORD!";
var notword =" IS  NOT A WORD";
if (spell.correct(test)== true){
  var  twitterstatus = test.concat(isword);
} else {
        var twitterstatus = test.concat(notword);
}









//Tweet Something

T.post('statuses/update', {status:twitterstatus},   function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
});

});
