const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const employeePrompt = [
    {
        type: 'input',
        name: 'name',
        message: "Employee's Name"
    },
    {
        type: 'input',
        name: 'id',
        message: "Employee's Id"
    },
    {
        type: 'input',
        name: 'email',
        message: "Employee's Email"
    },
];

const engineerPrompt = [{
    type: 'input',
    name: 'github',
    message: "Employee's Github address"
}];

const managerPrompt = [{
    type: 'input',
    name: 'officeNumber',
    message: "Employee's Office Number"
}];

const internPrompt = [{
    type: 'input',
    name: 'school',
    message: "Employee's School"
}];

const employeeTypePrompt = [{
    type: 'list',
    choices: ['Engineer', 'Manager', 'Intern'],
    name: 'employeeType',
    message: 'Choose an employee type...'
}];

createAnotherPrompt = [{
    type: 'confirm',
    name: 'createAnother',
    message: 'Create another employee?'
}]

confirmEmployeePrompt = [{
    type: 'confirm',
    name: 'confirmEmployee',
    message: 'Data is accurate?'
}]

//main entry point for CLI prompt for employee data
async function getEmployeeData() {
    let prompt = await inquirer.prompt(employeeTypePrompt);
    const employeeType = prompt.employeeType;
    // console.log(employeeType);
    let employeeDataPrompt;
    
    // set up subsequent prompt based on response
    switch(employeeType){
        case 'Engineer':
            employeeDataPrompt = [...employeePrompt, ...engineerPrompt];
            break;
        case 'Manager':
            employeeDataPrompt = [...employeePrompt, ...managerPrompt];
            break;
        case 'Intern':
            employeeDataPrompt = [...employeePrompt, ...internPrompt];
            break;
    }
    //console.log(employeeDataPrompt);
    let employeeData = await inquirer.prompt(employeeDataPrompt);
    return employeeData;
}

async function getEmployees(){
    let employees = [];
    do {
        let employeeData = await getEmployeeData();
        let confirmInput = await inquirer.prompt(confirmEmployeePrompt);
        console.log(confirmInput);
        if (!confirmInput.confirmEmployee){
            continue;
        }
        employees.push(employeeData);
        let prompt = await inquirer.prompt(createAnotherPrompt);
        if (!prompt.createAnother){
            break;
        }

    } while (true);
    return employees;
}

async function main(){
    let employees = await getEmployees();
    console.log(employees);
}

main();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
