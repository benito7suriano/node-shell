const fs = require('fs');
const done = require('./bash.js');

const cat = (arg, done) => {
  fs.readFile('./' + arg, 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      // process.stdout.write(data);
      // process.stdout.write('\nprompt>');
      done(data);
    }
  });
}

module.exports = cat;
