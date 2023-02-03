#!/usr/bin/env node
 
const spawn = require('cross-spawn');

var argv = require('minimist')(process.argv.slice(2));

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

 
