#!/usr/bin/env node
const inquirer = require('inquirer');

inquirer.prompt([
    'one', 'two', 'three'
]).then(answers => {
    console.log('answers', answers);
});