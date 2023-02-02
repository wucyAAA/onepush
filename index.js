const spawn = require('cross-spawn');

const result = spawn.sync('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });
console.log(result);

// echo "# automatic" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/wucyAAA/automatic.git
// git push -u origin main