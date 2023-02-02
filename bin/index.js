console.log('xxxxxx');
const spawn = require('cross-spawn');

// var argv = require('minimist')(process.argv.slice(2));
// console.log(argv);

spawn.sync('git', ['add', '.'], { stdio: 'inherit' });

// console.log(argv);

spawn.sync('git', ['commit','-m', '测试'], { stdio: 'inherit' });

spawn.sync('git', ['push'], { stdio: 'inherit' });

 
