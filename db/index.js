const connection = require("../config/connection");

class DB {
    constructor(connection){
        this.connection = connection;
    }

    findAllEmployees(){
        return this.connection.promise().query(
            "SELECT * from employee"
        )
    }

    findAllDepartments(){
        return this.connection.promise().query(
            "SELECT * from department"
        )
    }

    findAllRoles(){
        return this.connection.promise().query(
            "SELECT * from role"
        )
    }

    addDepartment(department){
        
        return this.connection.promise().query(
            "INSERT INTO department SET ?", department
        )
    }

    addRole(role){
        return this.connection.promise().query(
            "INSERT INTO role SET ?", role
        )
    }

    addEmployee(employee){
        return this.connection.promise().query(
            "INSERT INTO employee SET ?", employee
        )
    }
}

module.exports = new DB(connection);