# onepush  一条命令，三种体验！
## Features
 执行命令后，会自动执行打包并提交到仓库 <br>
 执行命令后会输出正能量语句，给你加油打气！
## Caveats
一定要先在自己提交过项目后，该仓库才好使，该仓库只会自动执行以下4条命令
```
npm run build
git add .
git commit -m 'commit message'
git push
```
除此不会有其它功能，适用于个人项目提交。
## Simple usage
```
不想下载,就直接运行：

npx 1push

添加提交信息:

npx 1push -m 'not first commit'

如果你想打包

npx 1push -b
```
```
下载：
npm install onepush -D  

首先注册命令到全局:

npm link 

直接运行:

1push

添加提交信息:

1push -m 'not first commit'

如果你想打包

1push -b
```