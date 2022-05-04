const { prompt } = require("inquirer");
const express = require('express');
const db = require("./db/query.sql");
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
                {
                    name: "View departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "View roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Add department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Update employee role",
                    value: "UPDATE_ROLE"
                },
                
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
        const sql = 'SELECT id, department_name AS title FROM department';
        db.query(sql, (err, rows) => {
            if (err) {
              res.status(500).json({ error: err.message });
               return;
            }
            res.json({
              message: 'success',
              data: rows
            });
    });
    
});
.then(() => mainMenu());
}






function quit() {
    console.log("Bye for now!");
    process.exit();
};