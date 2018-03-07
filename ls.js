const fs = require('fs');
const done = require('./bash.js');

const ls = (done) => {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      // throw err;
      done('Something went wrong!');
    } else {
      // process.stdout.write(files.join('\n'));
      // process.stdout.write('\n prompt>');
      done(files.join('\n'));
    }
  });
}

module.exports = ls;
