const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const Finlay = new Engineer('Finlay', '123', 'finlay@abc.com', 'finlay@github.com');
const Scarlett = new Manager('Scarlett', '321', 'scarlett@abc.com', 'scarlett@github.com');
const Raya = new Intern('Raya', '213', 'raya@abc.com', 'HighSchool');

Finlay.printEngineerName();
Scarlett.printManagerName();
Raya.printInternName();