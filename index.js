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
//bonus
                //Update employee managers.
                //View employees by manager.
                //View employees by department.
                //Delete departments, roles, and employees.
                //View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.
               
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choices = res.choices;
        //now call the function depending on what the user chooses
        //you can do a conditional (if conditional)
        //switch/case

    })
}


//functions
function viewEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees)
    })
    .then(() => mainMenu());
}





function quit() {
    console.log("Bye for now!");
    process.exit();
};