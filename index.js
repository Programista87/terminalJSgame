#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import  figlet  from "figlet";
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
function winner(){
    console.clear();
    figlet(`Congrats, ${playerName} !\n $ You're JavaScript Master !!!`,(err, data) => {
        console.log(gradient.pastel.multiline(data) + '\n');
        process.exit(0);
    });
}

async function question1() {
    const answer = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'Why so JavaScript and Java have similar name? \n',
        choices: [
            'JavaScript is a stripped-down version of Java',
            'JavaScript’s syntax is loosely based on Java’s',
            'They both originated on the island of Java',
            'None of the above',
        ],
    });

    return handleAnswer(answer.question_1 === 'JavaScript’s syntax is loosely based on Java’s');
}

async function question2() {
        const answer = await inquirer.prompt({
            name: 'question_2',
            type: 'list',
            message: 'When a user views a page containing a JavaScript program, which machine actually executes the script? \n',
            choices : [
                    'The User’s machine running a Web browser',
                    'The Web server',
                    'A central machine deep within Netscape’s corporate offices',
                    'None of the above',
            ],
        });
        return handleAnswer(answer.question_2 === 'The User’s machine running a Web browser');

 }

async function question3() {
        const answer = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: '______ JavaScript is also called client-side JavaScript \n',
        choices : [
                'Microsoft',
                'Navigator',
                'LiveWire',
                'Native',
         ],
     });

    return handleAnswer(answer.question_3 === 'Navigator');

}


async function question4() {
    const answer = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: '______ JavaScript is also called server-side JavaScript \n',
        choices : [
            'Microsoft',
            'Navigator',
            'LiveWire',
            'Native',
        ],
    });

    return handleAnswer(answer.question_4 === 'LiveWire');

}

async function question5() {
    const answer = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message: 'What are variables used for in JavaScript Programs? \n',
        choices : [
            'Storing numbers, dates, or other values',
            'Varying randomly',
            ' Causing high-school algebra flashbacks',
            'None of the above',
        ],
    });

    return handleAnswer(answer.question_5 === 'Storing numbers, dates, or other values');

}

async function question6() {
    const answer = await inquirer.prompt({
        name: 'question_6',
        type: 'list',
        message: '_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation \n',
        choices : [
            'Client-side',
            'Server-side',
            'Local',
            'Native',
        ],
    });

    return handleAnswer(answer.question_6 === 'Client-side');

}

async function question7() {
    const answer = await inquirer.prompt({
        name: 'question_7',
        type: 'list',
        message: `What should appear at the very end of your JavaScript? The < script LANGUAGE=JavaScript > tag \n`,
        choices : [
            'The < /script >',
            'The < script >',
            'The END statement',
            'None of the above',
        ],
    });

    return handleAnswer(answer.question_7 === 'The < /script >');

}

async function question8() {
    const answer = await inquirer.prompt({
        name: 'question_8',
        type: 'list',
        message: 'Which of the following can’t be done with client-side JavaScript? \n',
        choices : [
            'Validating a form',
            'Sending a form’s contents by email',
            'Storing the form’s contents to a database file on the server',
            'None of the above',
        ],
    });

    return handleAnswer(answer.question_8 === 'Storing the form’s contents to a database file on the server');

}

async function question9() {
    const answer = await inquirer.prompt({
        name: 'question_9',
        type: 'list',
        message: 'Which of the following are capabilities of functions in JavaScript? \n',
        choices : [
            'Return a value',
            'Accept parameters and Return a value',
            'Accept parameters',
            'None of the above',
        ],
    });

    return handleAnswer(answer.question_9 === 'Accept parameters');

}


async function question10() {
    const answer = await inquirer.prompt({
        name: 'question_10',
        type: 'list',
        message: 'Which of the following is not a valid JavaScript variable name? \n',
        choices : [
            '2names',
            '_first_and_last_names',
            'FirstAndLast',
            'None of the above',
        ],
    });

    return handleAnswer(answer.question_10 === '2names');

}



 await welcome();
 await askName();
 await question1();
 await question2();
 await question3();
 await question4();
 await question5();
 await question6();
 await question7();
 await question8();
 await question9();
 await question10();
 winner();