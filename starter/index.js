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

const createManager = () => {
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
    ])
};

createManager()
.then(answers => {
    return pageTemplate(answers);
})

.catch(err => {
    console.log(err)
})