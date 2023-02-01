const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const pageTemplate = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// const Finlay = new Engineer('Finlay', '123', 'finlay@abc.com', 'finlay@github.com');
// const Scarlett = new Manager('Scarlett', '321', 'scarlett@abc.com', 'scarlett@github.com');
// const Raya = new Intern('Raya', '213', 'raya@abc.com', 'HighSchool');

// Finlay.printEngineerName();
// Scarlett.printManagerName();
// Raya.printInternName();



function createManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Managers Name',
            message: 'Please enter the Managers full name here: ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Managers name must be entered first.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the Manager id number here: ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Managers id must be entered here.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the Managers email address here: ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Managers email address must be entered here.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office number',
            message: 'Please enter the Managers office number here: ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Managers office number must be entered here.');
                    return false;
                }
            }
        }
    ]).then(data => {
        console.log(data);
    })
};

function createRole() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'job',
            message: 'What is your position?',
            choices: [
                {
                    name: 'Create Engineeer',
                    value: 'Engineer'
                },
                {
                    name: 'Create Intern',
                    value: 'Intern' 
                },
                {
                    name: 'Exit Team Profile Generator',
                    value: 'Exit'
                }
            ]
        }
    ]).then(choice => {
        if (choice.option === 'Engineer') {
            return createEngineer();
        } else if (choice.option === 'intern') {
            return createIntern();
        } else {
            console.log('Thanks for using this app');
            process.exit();
        }
    });
}

function init() {
    console.log('-----Welcome to the TEAM PROFILE GENERATOR APP-----');

    createManager().then(createRole);
}

init();

// .then

// .catch(err => {
//     console.log(err)
// });


// const createEmployee = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'Employees Name',
//             message: 'Please enter your name here: ',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Employees name must be entered first.');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'list',
//             name: 'job',
//             message: 'What is your position?',
//             choices: ['Engineer', 'Intern'],
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please choose your position');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: 'Please enter your id number here: ',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Your id must be entered here.');
//                     return false;
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'Please enter your email address here: ',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Your email address must be entered here.');
//                     return false;
//                 }
//             }
//         }
//     ])
// };

// createEmployee()
// .then(answers => {
//     return pageTemplate(answers);
// })

// .catch(err => {
//     console.log(err)
// });