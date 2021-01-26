#!/usr/bin/env node
const boxen = require('boxen');
const chalk = require('chalk');
const terminalLink = require('terminal-link');
const CFonts = require('cfonts');

const NEWLINE = "\n";
const EMPTYLINE = "";

let today = new Date();
let actualYear = today.getFullYear();

const birthday = 1996+1;
const myAge = actualYear - birthday;

const alias = CFonts.render('Achouffe!',{
    font: '3d',
    space: false,
    maxLength: '12',
    colors: ['green'],
    background: 'transparent'
});

const data = {
    title: chalk.white.bold("      AUSTIN BENARD"),
    // alias: chalk.yellow.bold("             @Achouffe"),
    age: `${chalk.green(myAge)} Years old`,
    country: chalk.black.bold("          BE") + chalk.yellow.bold('LG') + chalk.red.bold('IUM'),
    github: `MY GITHUB      =>    ${terminalLink('Github', "https://github.com/Achouffe666")}`,
    linkedin: `MY LINKEDIN    =>    ${terminalLink('Linkedin', "https://www.linkedin.com/in/austin-benard/")}` 
};

console.log(boxen(alias.string,{padding: 1, margin: 1, borderStyle: 'double'}))

console.log(boxen(
    [data.title,
        // data.alias,
        `${data.country}`,
        EMPTYLINE,
     `${data.age}`,
     EMPTYLINE,
     `${data.github}`,
     `${data.linkedin}`,
    ].join(NEWLINE),
     {padding: 1, margin: 1, borderStyle: 'double'}));