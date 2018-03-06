const fs = require('fs');

const cat = () => {
  fs.readFile('PATH', 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
      process.stdout.write('\n prompt>');
    }
  });
}

module.exports = cat;
