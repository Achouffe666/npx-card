#!/usr/bin/env node
const boxen = require('boxen');
const chalk = require('chalk');
const terminalLink = require('terminal-link');
const NEWLINE = "\n";
const EMPTYLINE = "";

let today = new Date();
let actualYear = today.getFullYear();

const birthday = 1996+1;
const myAge = actualYear - birthday;


const data = {
    title: chalk.white.bold("      AUSTIN BENARD"),
    alias: chalk.yellow.bold("             @Achouffe"),
    age: `${chalk.green(myAge)} Years old`,
    country: chalk.black.bold("          BE") + chalk.yellow.bold('LG') + chalk.red.bold('IUM'),
    github: `MY GITHUB =>      ${terminalLink('Github', "https://github.com/Achouffe666")}`,
    linkedin: `MY LINKEDIN =>    ${terminalLink('Linkedin', "https://www.linkedin.com/in/austin-benard/")}` 
};


console.log(boxen(
    [data.title,
        data.alias,
        EMPTYLINE,
     `${data.age}`,
     `${data.country}`,
     EMPTYLINE,
     `${data.github}`,
     `${data.linkedin}`
    ].join(NEWLINE),
     {padding: 1, margin: 1, borderStyle: 'double'}));