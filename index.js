//dependencies
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

// classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// I TRIED TO LINK TO A QUESTIIONS MODULE BUT IT DID NOT WORK
// import managerQuestions from './lib/questions';
// const engineerQuestions = require('./lib/questions');
// const internQuestions = require('./lib/questions');

const employeesList = [];
const cardList = [];

// List of Questions for each employee type
const managerQuestions = [
    {
        type: 'input',
        message: "Please enter the Team Manager's Name:",
        name: 'name'
    },
    {
        type: 'input',
        message: "Please enter the Team Manager's Employee ID Number:",
        name: 'id'
    },
    {
        type: 'input',
        message: "Please enter the Team Manager's Email Address:",
        name: 'email'
    },
    {
        type: 'input',
        message: "Please enter the Team Manager's Office Number:",
        name: 'officeNumber'
    },
]

const engineerQuestions = [
    {
        type: 'input',
        message: "Please enter the Engineer's Name:",
        name: 'name'
    },
    {
        type: 'input',
        message: "Please enter the Engineer's Employee ID Number:",
        name: 'id'
    },
    {
        type: 'input',
        message: "Please enter the Engineer's Email Address:",
        name: 'email'
    },
    {
        type: 'input',
        message: "Please enter the Engineer's GitHub User Name:",
        name: 'github'
    },
]

const internQuestions = [
    {
        type: 'input',
        message: "Please enter the Intern's Name:",
        name: 'name'
    },
    {
        type: 'input',
        message: "Please enter the Intern's Employee ID Number:",
        name: 'id'
    },
    {
        type: 'input',
        message: "Please enter the Intern's Email Address:",
        name: 'email'
    },
    {
        type: 'input',
        message: "Please enter the Intern's School Name:",
        name: 'school'
    },
]

// Initialize the application starting with a request for manager information
function init() {
    console.log('Please build your team.')
    inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            employeesList.push(newManager);
            addEmployee();
        })
        .catch((error) => {
            if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            }
  });
}

// Ask the user if they would like to add another employee: Engineer, Intern or None. Based on input, continue to specific employee information or terminate inquirer and proceed to generate HTML page
function addEmployee() {
    inquirer
        .prompt([
            {
            type: 'list',
            message: "Which type of team member would you like to add?",
            name: 'teamMember',
            choices: ['Engineer', 'Intern', "I don't want to add any more team members."]
            }
        ])
        .then((answer) => {
            if (answer.teamMember == 'Engineer') {
                addEngineer();
            }
            else if (answer.teamMember === 'Intern') {
                addIntern();
            }
            else {
                console.log('Thanks for entering your team information. Your team roster page has been generated.')
                console.log(employeesList);
                generateHTML();
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            }
  });
}

// Enter Engineer Data and return to ask if user would like to add another employee
function addEngineer() {
    console.log('Please provide the following data:')
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employeesList.push(newEngineer);
            addEmployee();
        })
        .catch((error) => {
            if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            }
  });
}

// Enter Intern Data and return to ask if user would like to add another employee
function addIntern() {
    console.log('Please provide the following data:')
    inquirer
        .prompt(internQuestions)
        .then((answers) => {
            const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employeesList.push(newIntern);
            addEmployee();
        })
        .catch((error) => {
            if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            }
  });
}

function generateHTML(employeesList) {
    employeesList.forEach(element => {
        const card = `
        <div class="card">
        <div class="card-header">
        <h2>${this.name}</h2>
        <i>icon</i><h3>Title</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item id">ID: 4</li>
            <li class="list-group-item email">Email: <a href="mailto:email@email.com">email.com</a></li>
            <li class="list-group-item info">Label: info</li>
            </ul>
        </div>    
    </div>`
    });
}

init();  