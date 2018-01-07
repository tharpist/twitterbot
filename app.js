//app.js

var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

// Set up your search parameters
var params = {
  q: '#nodejs',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

//This Program Will Tweet Something and then favorite some tweets

//Tweet Something
 status = 'This is a test OK'
T.post('statuses/update', {status: 'This is another test'})
  .then(function (tweet) {
    console.log(tweet);
  })
  .catch(function (error) {
    throw error;
  })

