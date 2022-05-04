const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");

function mainMenu() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View ALL employees",
                    value: "VIEW_EMPLOYEES"
                },
                //VIEW employees
                //view departments
                //view roles
                //add employee
                //add department
                //update an employee role
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choices = res.choices;
        //now call the function depending on what the user chooses
    })
}