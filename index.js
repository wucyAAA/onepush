#!/usr/bin/env node
 
const spawn = require('cross-spawn');

var argv = require('minimist')(process.argv.slice(2));

console.log('\033[31;105m----------------- 又是努力的一天！-----------------\033[m')

if(argv.b){
  spawn.sync('npm', ['run', 'build'], { stdio: 'inherit' });
}

let m = '今天又努力一点点'
if(argv.m){
  m = argv.m
}

spawn.sync('git', ['add', '.'], { stdio: 'inherit' });

spawn.sync('git', ['commit','-m', m], { stdio: 'inherit' });

let {status} = spawn.sync('git', ['push'], { stdio: 'inherit' });

if(status == 0){
  console.log('\n')
  console.log('\033[31;105m,----------------- 加油！我们能赢！-----------------,\033[m')
}
