const done = require('./bash.js');

const cwd = (done) => {
 //  process.stdout.write(process.cwd());
 //  process.stdout.write('\nprompt> ');
 done(process.cwd());
}


module.exports = cwd;

