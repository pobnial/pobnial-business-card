#!/usr/bin/env node
'use strict'

import chalk from 'chalk'
import boxen from 'boxen'
import clear from 'clear'
import inquirer from 'inquirer'
import Enquirer from 'enquirer'
import open from 'open'
import terminalImage from 'terminal-image';


const data = {
    name: chalk.bold.hex('#03b1fc')('Paulo Obnial'),
    info: chalk.italic.hex('#03b1fc')('Class of 2026, Boston University'),
    major: chalk.italic.hex('#03b1fc')('Majoring in Data Science, Minoring in Psychology'),
    github: chalk.white('https://github.com/pobnial'),
    email: chalk.white('pobnial@bu.edu'),
    instagram: chalk.white('@paulo.obnial'),

    githubLabel: chalk.white('Github:'),
    emailLabel: chalk.white('Email:'),
    instagramLabel: chalk.white('Instagram:')

};

const card = boxen (
    [

        `${data.name}`,
        `${data.info}`,
        `${data.major}`, 
        ``,        
        `${data.githubLabel} ${data.github}`,
        `${data.emailLabel} ${data.email}`,
        `${data.instagramLabel} ${data.instagram}`,
        ``,
        `${chalk('Feel free to reach out!')}`,

    ].join('\n'),
    {
        margin: 0,
        padding: 1,
        borderStyle: 'double',
        borderColor: '#FFA500'
    }
);

const options = {
    type: "list",
    name: 'actions', 
    message: 'select action', 
    choices: [
        '- exit'
    ]
}

function main() {
    console.log(card);
    inquirer.prompt(options).then(async answer => {
    if (answer.actions == " - exit") {
        return;
    }
    else {
     console.log ('-'.repeat (40))
     await answer.actions ();
     console.log ('-'. repeat (40))
    
     Enquirer.prompt ( {
     type: "toggle",
     name: "again", 
     message: "exit?",
     default: false
    }).then (answer => {
    if (answer.again == false) {
        main ();
        }
    });
    } 
});
}

main()
