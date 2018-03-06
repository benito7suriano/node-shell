// console.log(Object.keys(process));
const cwd = () => {
 process.stdout.write(process.cwd());
 process.stdout.write('\n prompt> ');
}


module.exports = cwd;

