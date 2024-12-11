"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const connection_1 = __importDefault(require("./db/connection"));
function mainMenu() {
    inquirer_1.default.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add Department',
            'Add Role',
            'Add Employee',
            'Update Employee Role',
            'Exit'
        ]
    }).then(answer => {
        switch (answer.action) {
            case 'View All Departments':
                viewDepartments();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'View All Employees':
                viewEmployees();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'Exit':
                connection_1.default.end();
                console.log('Goodbye!');
                break;
        }
    });
}
function viewDepartments() {
    connection_1.default.query('SELECT * FROM department', (err, res) => {
        if (err)
            throw err;
        console.table(res.rows);
        mainMenu();
    });
}
function viewRoles() {
    connection_1.default.query(`SELECT role.id, role.title, department.name AS department, role.salary
                FROM role
                JOIN department ON role.department_id = department.id`, (err, res) => {
        if (err)
            throw err;
        console.table(res.rows);
        mainMenu();
    });
}
function viewEmployees() {
    connection_1.default.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.manager_id
                FROM employee
                JOIN role ON employee.role_id = role.id
                JOIN department ON role.department_id = department.id`, (err, res) => {
        if (err)
            throw err;
        console.table(res.rows);
        mainMenu();
    });
}
function addDepartment() {
    inquirer_1.default.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter the name of the department:'
    }).then(answer => {
        connection_1.default.query('INSERT INTO department (name) VALUES ($1)', [answer.name], (err) => {
            if (err)
                throw err;
            console.log('Department added!');
            mainMenu();
        });
    });
}
function addRole() {
    inquirer_1.default.prompt([
        { type: 'input', name: 'title', message: 'Enter the role title:' },
        { type: 'input', name: 'salary', message: 'Enter the role salary:' },
        { type: 'input', name: 'department_id', message: 'Enter the department ID:' }
    ]).then(answer => {
        connection_1.default.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [answer.title, answer.salary, answer.department_id], (err) => {
            if (err)
                throw err;
            console.log('Role added!');
            mainMenu();
        });
    });
}
function addEmployee() {
    inquirer_1.default.prompt([
        { type: 'input', name: 'first_name', message: 'Enter the employee first name:' },
        { type: 'input', name: 'last_name', message: 'Enter the employee last name:' },
        { type: 'input', name: 'role_id', message: 'Enter the role ID:' },
        { type: 'input', name: 'manager_id', message: 'Enter the manager ID (if none, leave blank):' }
    ]).then(answer => {
        connection_1.default.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [answer.first_name, answer.last_name, answer.role_id, answer.manager_id || null], (err) => {
            if (err)
                throw err;
            console.log('Employee added!');
            mainMenu();
        });
    });
}
function updateEmployeeRole() {
    inquirer_1.default.prompt([
        { type: 'input', name: 'employee_id', message: 'Enter the employee ID to update:' },
        { type: 'input', name: 'role_id', message: 'Enter the new role ID:' }
    ]).then(answer => {
        connection_1.default.query('UPDATE employee SET role_id = $1 WHERE id = $2', [answer.role_id, answer.employee_id], (err) => {
            if (err)
                throw err;
            console.log('Employee role updated!');
            mainMenu();
        });
    });
}
mainMenu();