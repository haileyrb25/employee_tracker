const { prompt } = require("inquirer");
const db = require("./db");

mainMenu()

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
                    name: "Add role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Add department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Update employee role",
                    value: "UPDATE_ROLE"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choices = res.choice;
        console.log(choices)
        switch (choices) {
            case "VIEW_EMPLOYEES":
                viewEmployees()
                break;
            case "VIEW_DEPARTMENTS":
                viewDepartments()
                break;
            case "VIEW_ROLES":
                viewRoles()
                break;
            case "ADD_EMPLOYEE":
                addEmployee()
                break;
            case "ADD_DEPARTMENT":
                addDepartment()
                break;
            case "ADD_ROLE":
                addRole()
                break;
            case "UPDATE_ROLE":
                updateRole()
                break;
            case "QUIT":
                quit()
                break;   
        }
    })
}
//bonus
//Update employee managers.
//View employees by manager.
//View employees by department.
//Delete departments, roles, and employees.
//View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.

//functions
function viewEmployees() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n");
            console.table(employees)
            const sql = 'SELECT id, department_name AS title FROM department';
        })
        .then(() => mainMenu());
}

function viewRoles(){
    db.findAllRoles()
    .then(([rows])=>{
        let roles = rows;
        console.table(roles)
    })
    .then(()=> mainMenu())
}

function viewDepartments(){
    db.findAllDepartments()
    .then(([rows])=>{
        let departments = rows;
        console.table(departments)
    })
    .then(()=> mainMenu())
}

function addDepartment() {
    prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the department you would like to add?",
        }
    ])
        .then((answer) => {
            let name = answer
            db.addDepartment(name)
                .then(() => `Added ${name.name} to the database!`)
                .then(() => mainMenu());
        })
}

function addRole(){
    db.findAllDepartments()
    .then(([rows])=>{
        let departments = rows;
        const departmentChoices = departments.map(({ name, id})=>({
            name: name,
            value: id
        }))
        prompt([
            {
                type: "input",
                name: "title",
                message: "What is the title of the role?"
            },
            {
                type: "input",
                name: "salary",
                message: "What is the salary of the role?"
            },
            {
                type: "list",
                name: "department_id",
                message: "What department does this role fall under?",
                choices: departmentChoices
            }
        ])
        .then((answer)=>{
            let role = answer;
            db.addRole(role)
            .then(()=> `Added ${role.role} to the database!`)
            .then(()=> mainMenu())
        })

    })
}

// update employee role
// db.findAllemployees
// map over all the employees in employeeChoices
// then prompt which employee would you like to update and you will show employeechoices
// db.findAllRoles
// map over all the roles in roleChoices
// then prompt which role you would like to give that employee

// employee will be saved in an object in which youll have the id. 
// youre going to call your backend method of updateEmployeeRole(employeeId, roleId)




function quit() {
    console.log("Goodbye!");
    process.exit();
};