const request = require('request');

const curl = (arg, done) => {
  request(arg, function (err, res, body) {
    if(err) {
      process.stdout.write('Error: ' + err);
    } 
    else { 
      // process.stdout.write(body);
      done(body);
    }
  });
};

module.exports = curl;



