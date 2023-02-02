const spawn = require('cross-spawn');

spawn.sync('git', ['add', '.'], { stdio: 'inherit' });

spawn.sync('git', ['commit','-m', '测试'], { stdio: 'inherit' });

spawn.sync('git', ['push'], { stdio: 'inherit' });

 
