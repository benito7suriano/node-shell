'use strict';
const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const curl = require('./curl.js');
/*
//Output a prompt
process.stdout.write('prompt> ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data',(data)=> {
  const cmd = data.toString().trim(); //remove the newline
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\n prompt> ');
});

*/

//Output a prompt
process.stdout.write('\nprompt> ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data',(data)=> {
  const cmd = data.toString().trim().split(' '); //remove the newline
  // if cmd === pwd then..
  if (cmd[0] === 'pwd') {
    pwd();
  } else if (cmd[0] === 'ls') {
    ls();
  } else if (cmd[0] === 'cat') {
    cat(cmd[1]);
  }
  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\n prompt> ');

});

// module.exports = cmd;
