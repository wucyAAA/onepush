#!/usr/bin/env node
 
const spawn = require('cross-spawn');

var argv = require('minimist')(process.argv.slice(2));

let arr = ['又是努力的一天！','加油！我们能赢！','今天也要元气满满哦！','王牌飞行员申请出战！','恕瑞玛，你的皇帝回来了！']
let str = arr[Math.floor(Math.random()*5)]
console.log('\033[31;105m----------------- ',str,'-----------------\033[m')

if(argv.b){
  spawn.sync('npm', ['run', 'build'], { stdio: 'inherit' });
}

let m = '今天又努力一点点'
if(argv.m){
  m = argv.m
}

spawn.sync('git', ['add', '.'], { stdio: 'inherit' });

spawn.sync('git', ['commit','-m', m], { stdio: 'inherit' });

spawn.sync('git', ['push'], { stdio: 'inherit' });

 
