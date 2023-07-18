const mysql = require('mysql2');
const inquier = require('inquirer');
const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render(
    console.log(
        logo({
            name: 'EMPLOYEE TRACKER',
            font: 'Speed',
            lineChars: 10,
            padding: 2,
            margin: 3,
            borderColor: 'grey',
            logoColor: 'bold-green',
            textColor: 'green',
        })
        .emptyLine()
        .right('version 3.7.123')
        .emptyLine()
        .render())

));
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employees_db',
});

const inQquestions = [{
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: ["View All Employees",    
    "View All Roles", 
    "View All Departments", 
    "Add Employee", 
    "Add Role", 
    "Add Department", 
    "Update Role for Employee", 
    // "Update Employee Manager", 
    // "View Employee Manager", 
    // "Delete Department", 
    // "Delete Role", 
    // "Delete Employee", 
    // "View Total Utilized Budget of Department", 
   "QUIT"]
}]



function startPrompt() {

  inquier.prompt(inQquestions)
  .then(response => {
    if(response.action === "View All Employees") {
        viewEmployees()
    } else if (response.action === "View All Roles") {
        viewRoles()
    } else if (response.action === "View All Departments") {
        viewDepartments()
    } else if (response.action === "Add Employee") {
        addEmployee()
    } else if (response.action === "Add Role") {
        addRole()
    } else if (response.action === "Add Department") {
        addDepartment()
    } else if (response.action === "Update Role for Employee") {
        updateEmployeerole()
    } else if (response.action === "QUIT"){
        process.exit()
    }
  })
  .catch(err => {
    console.error(err);
  });
}
startPrompt();


function viewEmployees() {
    connection.query("SELECT * FROM employee", function(error, data){
        console.table(data)
        startPrompt()
    })
}

function viewRoles() {
    connection.query("SELECT * FROM role", function(error, data){
        console.table(data)
        startPrompt()
    })
}

function viewDepartments() {
    connection.query("SELECT * FROM Department", function(error, data){
        console.table(data)
        startPrompt()
    })
}




function addEmployee(){
     inquier.prompt(
        [
            {
                type: "input",
                name: "first_name",
                message: "what is the employee's first name?"
              },
              {
                type: "input",
                name: "last_name",
                message: "what is the employee's last name?"
              },
              {
                type: 'list',
                name: 'role_id',
                choices: ["Sales Lead", "Salesperson", "Lead Engineer","Software Engineer", "Account Manager", "Accountant", "Legal Team Lead", "Lawyer"],
                message: "what is the employee's role?",
                filter: function (choice) {
                    if (choice === "Sales Lead") return 1;
                    if (choice === "Salesperson") return 2;
                    if (choice === "Lead Engineer") return 3;
                    if (choice === "Software Engineer") return 4;
                    if (choice === "Account Manager") return 5;
                    if (choice === "Accountant") return 6;
                    if (choice === "Legal Team Lead") return 7;
                    if (choice === "Lawyer") return 8
                }
              },
              {
                type: 'input',
                name: 'manager_id',
                message: "who is the employee's manager? (enter manager ID or NONE)",
                filter: function (choice) {
                    console.log(choice)
                    if (choice.toUpperCase() === "NONE") {
                        return NULL
                    }
                        else return choice                    
                }
              }
              

        ])
        
            
    
    .then(function(res){
        console.log(res)
        const employee = {
            manager_id: res.manager_id,
            first_name: res.first_name,
            last_name: res.last_name,
            role_id: res.role_id

        }
        connection.query("INSERT into employee SET ?", employee,
        function(error,data){
            console.table(data)
            console.log(error)
            startPrompt()
        })
    })
}

function addRole(){
    inquier.prompt(
        [
            {
                type: "text",
                name: "name",
                message: "What is the name of this new Role?", 
            }
        ]
    )
    .then(function(res){
        connection.query("INSERT into role (name) values(?)", [res.name],function(error,data){
            console.table(data)
            startPrompt()
        })
    })
}

function addDepartment(){
    inquier.prompt(
        [
            {
                type: "text",
                name: "name",
                message: "What is the name of this new department?", 
            }
        ]
    )
    .then(function(res){
        connection.query("INSERT into Department (name) values(?)", [res.name],function(error,data){
            console.table(data)
            startPrompt()
        })
    })
}



function updateEmployeerole(){
    inquier.prompt(
        [
            {
                type: "text",
                name: "empid",
                message: "What is the employee id of the employee would you like to update?", 
            },
            {
                type: "text",
                name: "roleid",
                message: "What is the new Role id?", 
            }
        ]
    )
    .then(function(res){
        connection.query("INSERT into employee values(?)", [res.empid, res.roleid],function(error,data){
            console.table(data)
            startPrompt()
        })
    })
}

