var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')         
  .on('error', function (err) {                                   
    throw err;
    console.log('Error Occured')
  })
  .on('response', function (response) {
    console.log('Downloading image');                           
    console.log('Response Status Code: ', response.statusCode,
  'Response Message: ', response.statusMessage, 'Content Type: ', response.headers['content-type']);
    console.log('Download Complete!');
  })
  .pipe(fs.createWriteStream('./future.jpg'));
