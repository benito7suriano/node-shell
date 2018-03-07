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
  process.stdout.write('\nprompt> ');
});

*/

//Output a prompt
process.stdout.write('\nprompt> ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data',(data)=> {
  // remove the newspace and split the input into an array
  const cmd = data.toString().trim().split(' ');
  // if cmd === pwd then..
  if (cmd[0] === 'pwd') {
    // call pwd() which was imported above ^^^
    pwd(done);
  } else if (cmd[0] === 'ls') {
    // call ls() which was imported above ^^^
    ls(done);
  } else if (cmd[0] === 'cat') {
    // take second argument and pass it to cat()
    cat(cmd[1],done);
  } else if (cmd[0] === 'curl') {
    // take second arg and pass it to curl()
    curl(cmd[1],done);    
  }
  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\n prompt> ');
});

const done = (output) => {
  // show the output
  process.stdout.write(output);
  // show the prompt
  process.stdout.write('\nprompt> ');
}

// we have to avoid circular dependencies, therefore module.exports = done is not possible
