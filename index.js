const mysql = require('mysql2');
const inquier = require('inquirer');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employees_db',
});




function startPrompt() {
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
  
  inquier.prompt(inQquestions)
  .then(response => {
    if(response.action === "View All Employees") {
        viewEmployees()
    } else if (response.action === "View All Roles") {
        // call view all roles function
    } else if (response.action === "View All Departments") {
        // call departments function
        viewDepartments()
    } else if (response.action === "Add Employee") {
        // add employee funciton
    } else if (response.action === "Add Role") {
        // add role
    } else if (response.action === "Add Department") {
        addDepartment()
    } else if (response.action === "Update Role for Employee") {
        // update role
    } else if (response.action === "QUIT"){
        process.exit()
    }
  })
  .catch(err => {
    console.error(err);
  });
}
startPrompt();



function viewDepartments() {
    connection.query("SELECT * FROM Department", function(error, data){
        console.table(data)
        startPrompt()
    })
}


function viewEmployees() {
    connection.query("SELECT * FROM employee", function(error, data){
        console.table(data)
        startPrompt()
    })
}

function addDepartment(){
    inquier.prompt(
        [
            {
                type: "text",
                name: "name",
                message: "What is the new department name?",
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

// function updateEmployeerole(){
//     inquier.prompt(
//         [
//             {
//                 type: "text",
//                 name: "name",
//                 message: "Which employee would you like to update?",
//             }
//         ]
//     )
//     .then(function(res){
//         connection.query("UPDATTE into employee (name) values(?)", [res.name, re],function(error,data){
//             console.table(data)
//             startPrompt()
//         })
//     })
// }

// const viewAll = 

// const addNewDepartment =

// const addNewRole =

// const addNewEmployee =

// const updateRole =

// const updateManager = 

// const deleteDepartment = 

// const deleteRole = 

// const deleteEmployee = 

// const viewBudget = 