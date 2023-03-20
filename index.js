#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";


let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const neonTitle = chalkAnimation.neon(
        '🖥 Terminal JavaScript Multiple Choice Basic Test ...⌨  \n'
    );
    await sleep();
    neonTitle.stop();

    console.log(`
    ${chalk.bgBlue('How To Play')}
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRedBright('killed')}
    So get all the question right ...
    `);
}

async function askName() {
    const answer = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'Player';
        },
    });

    playerName = answer.player_name;
}
 async function question1() {
    const answer = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'Why so JavaScript and Java have similar name? \n',
        choices : [
            'JavaScript is a stripped-down version of Java',
            'JavaScript’s syntax is loosely based on Java’s',
            'They both originated on the island of Java',
            'None of the above',
        ],
    });

    return handleAnswer(answer.question_1);

 }

 async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if (isCorrect) {
        spinner.success({ text: `Nice work ${playerName}. That's a good answer ☑️` });
    } else {
        spinner.error({ text: `🛑 Game over, return to study ${playerName} ! `});
        process.exit(1);
    }
 }

 function winner(){
    console.clear();
    const msg = `Congrats, ${ playerName } !\n $ You're JavaScript Master !!!`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
 }
 await welcome();
 await askName();
 await question1();
 await winner();