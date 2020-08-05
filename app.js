const mysql = require("mysql");
const inquirer = require("inquirer");
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const consoleTables = require("console.table");
require("dotenv").config();
const { allowedNodeEnvironmentFlags, exit } = require("process");
const { setupMaster } = require("cluster");

// Function to validate for salaries
const validateNumber = async (input) => {
  if (isNaN(input) == true) {
    return "Please input a number.";
  }
  return true;
};

// Function to validate for phone numbers
const validatePhoneNumber = async (input) => {
  if (isNaN(input) == true) {
    return "Please input a number, or press return to skip (this is appended to the license)";
  }
  return true;
};

let connection = mysql.createConnection({
  multipleStatements: true,

  host: process.env.DB_HOST,

  // Your port; if not 3306
  port: process.env.DB_PORT,

  // Your username
  user: process.env.DB_USER,

  // Your password
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect(function (err) {
  if (err) throw err;
  clear();
  console.log(
    chalk.blueBright(
      figlet.textSync("Employee", {
        horizontalLayout: "full",
      })
    )
  );
  console.log(
    chalk.blueBright(
      figlet.textSync("Management", {
        horizontalLayout: "full",
      })
    )
  );
  console.log(
    chalk.blueBright(
      figlet.textSync("System", {
        horizontalLayout: "full",
      })
    )
  );
  start();
});

// Begin app
function start() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add a department.",
        "Add a role.",
        "Add an employee.",
        "View departments.",
        "View roles.",
        "View employees.",
        "View total budget utilization by department.",
        "View employees with the same manager.",
        "Update a role's department.",
        "Update an employee's role.",
        "Update an employee's manager.",
        "Delete a department.",
        "Delete a role.",
        "Delete an employee.",
        "Exit.",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Add a department.":
          addDepartment();
          break;

        case "Add a role.":
          addRole();
          break;

        case "Add an employee.":
          addEmployee();
          break;

        case "View departments.":
          viewDepartment();
          break;

        case "View roles.":
          viewRoles();
          break;

        case "View employees.":
          viewEmployees();
          break;

        case "View total budget utilization by department.":
          budgetUtil();
          break;

        case "View employees with the same manager.":
          employeesByManager();
          break;

        case "Update a role's department.":
          roleUpdate();
          break;

        case "Update an employee's role.":
          employeeRole();
          break;

        case "Update an employee's manager.":
          employeeManagers();
          break;

        case "Delete a department.":
          deleteDepartment();
          break;

        case "Delete a role.":
          deleteRole();
          break;

        case "Delete an employee.":
          deleteEmployee();
          break;

        case "Exit.":
          connection.end();
          break;
      }
    });

  function addDepartment() {
    inquirer
      .prompt({
        name: "department",
        type: "input",
        message: "What is the name of the department you would like to add?",
      })
      .then(function (answer) {
        connection.query(
          "INSERT INTO departments SET ?",
          {
            name: answer.department,
          },
          function (err) {
            if (err) throw err;
            console.log(
              answer.department + " successfully added to the departments"
            );
            // Return to the beginning
            start();
          }
        );
      });
  }

  function addRole() {
    inquirer
      .prompt([
        {
          name: "role",
          type: "input",
          message: "What is the title of the role you like to add?",
        },
        {
          name: "salary",
          type: "input",
          message: "What is the salary, without separating with commas.",
          validate: validateNumber,
        },
      ])
      .then(function (answers) {
        connection.query(
          "INSERT INTO role SET ?",
          {
            title: answers.role,
            salary: answers.salary,
          },
          function (err) {
            if (err) throw err;
            console.log(answers.role + " successfully add to roles.");
            // Return to the beginning
            start();
          }
        );
      });
  }

  function addEmployee() {
    connection.query("SELECT * FROM role", (err, results) => {
      if (err) throw err;
      inquirer
        .prompt([
          {
            name: "firstName",
            type: "input",
            message: "What is the first name of the employee?",
          },
          {
            name: "lastName",
            type: "input",
            message: "What is the last name of the employee?",
          },
          {
            name: "role",
            type: "list",
            message: "What is the employee's role?",
            choices: () => results.map((result) => result.title),
          },
        ])
        .then((answers) => {
          answers.role = results.filter(
            (result) => result.title === answers.role
          )[0].id;
          connection.query(
            "INSERT INTO employee SET ?",
            {
              first_name: answers.firstName,
              last_name: answers.lastName,
              role_id: answers.role,
            },
            (err) => {
              if (err) throw err;
              console.log(
                answers.firstName +
                  " " +
                  answers.lastName +
                  " successfully added to employee with the role of " +
                  answers.role
              );
              // Return to the beginning
              start();
            }
          );
        });
    });
  }

  function viewDepartment() {
    // Render department table
    connection.query("SELECT * FROM departments", (err, results) => {
      if (err) throw err;
      console.table(results);
      start();
    });
  }

  function viewRoles() {
    // Render employee table
    connection.query("SELECT * FROM role", (err, results) => {
      if (err) throw err;
      console.table(results);
      start();
    });
  }

  function viewEmployees() {
    connection.query(
      `SELECT 
      e.id, 
      e.first_name AS "First Name", 
      e.last_name AS "Last Name", 
      r.title, 
      d.name AS "Department", 
      IFNULL(r.salary, 'No Data') AS "Salary", 
      CONCAT(m.first_name," ",m.last_name) AS "Manager"
    FROM employee e
    LEFT JOIN role r 
    ON r.id = e.role_id 
    LEFT JOIN departments d 
    ON d.id = r.department_id
    LEFT JOIN employee m ON m.id = e.manager_id
    ORDER BY e.id;`,
      (err, results) => {
        if (err) throw err;
        console.table(results);
        start();
      }
    );
  }

  function budgetUtil() {
    connection.query(
      `SELECT departments.id, departments.name, role.salary as Budget
            FROM employee 
            LEFT JOIN 
            role on employee.role_id = role.id 
            LEFT JOIN 
            departments on role.department_id = departments.id 
            `,
      (err, results) => {
        if (err) throw err;
        console.table(results);
        start();
      }
    );
  }

  function employeesByManager() {
    connection.query("SELECT * FROM employee", (err, results) => {
      if (err) throw err;
      inquirer
        .prompt({
          name: "manager",
          type: "list",
          message: "Which manager's team would you like to view?",
          choices: () =>
            results.map((result) => result.first_name + " " + result.last_name),
        })
        .then((answer) => {
          let managerID = results.filter(
            (result) =>
              result.first_name + " " + result.last_name === answer.manager
          )[0].role_id;
          connection.query(
            `SELECT * FROM employee WHERE manager_id = ${managerID}`,
            (err, filteredResults) => {
              if (err) throw err;
              console.table(answer.manager + "'s Team: ", filteredResults);
              start();
            }
          );
        });
    });
  }

  function roleUpdate() {
    connection.query(
      "SELECT * FROM role; SELECT * FROM departments",
      (err, results) => {
        if (err) throw err;
        inquirer
          .prompt([
            {
              name: "role",
              type: "list",
              message:
                "What role would you like to assign to a new department?",
              choices: () => results[0].map((result) => result.title),
            },
            {
              name: "department",
              type: "list",
              message: "What department does this role belong to?",
              choices: () => results[1].map((result) => result.name),
            },
          ])
          .then((answers) => {
            let roleID = results[0].filter(
              (result) => result.title === answers.role
            )[0].id;
            let newDepartment = results[1].filter(
              (result) => result.name === answers.department
            )[0].id;
            connection.query(`UPDATE role set department_id = ? WHERE id = ?`, [
              newDepartment,
              roleID,
            ]);
            console.log(
              answers.role +
                " now belongs to the " +
                answers.department +
                " department."
            );
            start();
          });
      }
    );
  }

  // This one's really cool, check this out...
  function employeeRole() {
    connection.query(
      // Must include line 19 in order for this to work. This is two queries in one, returned as an array of data
      // This needed to be done because in previous attempts I was unable to map the names AND the roles
      // that existed within my database without them interacting negatively with one another.
      "SELECT * FROM employee; SELECT * FROM role",
      (err, results) => {
        if (err) throw err;
        inquirer
          .prompt([
            {
              name: "employee",
              type: "list",
              message: "What employee's role would you like to update?",
              choices: () =>
                // Like every other .map function used in my other functions, except we're interested in
                // the zeroth point of the array "results" because that corresponds with employee
                results[0].map(
                  (result) => result.first_name + " " + result.last_name
                ),
            },
            {
              name: "role",
              type: "list",
              message: "What is this employee's new role?",
              // results[1] here corresponds to role
              choices: () => results[1].map((result) => result.title),
            },
          ])
          .then((answers) => {
            // The two filter functions are present in other functions, these are unique because like the
            // .map functions above, we need to specify the zeroth or first point of the array
            let employeeID = results[0].filter(
              (result) =>
                result.first_name + " " + result.last_name === answers.employee
            )[0].id;
            let newRole = results[1].filter(
              (result) => result.title === answers.role
            )[0].id;
            connection.query(`UPDATE employee SET role_id = ? WHERE id = ?`, [
              newRole,
              employeeID,
            ]);
            console.log(
              answers.employee + "'s new role is now " + answers.role
            );
            start();
          });
      }
    );
  }

  function employeeManagers() {
    connection.query("SELECT * FROM employee", (err, results) => {
      if (err) throw err;
      inquirer
        .prompt([
          {
            name: "employee",
            type: "list",
            message: "Which employee's manager would you like to update?",
            choices: () =>
              results.map(
                (result) => result.first_name + " " + result.last_name
              ),
          },
          {
            name: "manager",
            type: "list",
            message: "Who is this employee's manager?",
            choices: () =>
              results.map(
                (result) => result.first_name + " " + result.last_name
              ),
          },
        ])
        .then((answers) => {
          let employeeID = results.filter(
            (result) =>
              result.first_name + " " + result.last_name === answers.employee
          )[0].id;
          let managerID = results.filter(
            (result) =>
              result.first_name + " " + result.last_name === answers.manager
          )[0].id;
          connection.query(`UPDATE employee SET manager_id = ? WHERE id = ? `, [
            managerID,
            employeeID,
          ]);
          console.log(
            answers.manager + " is now the manager of " + answers.employee
          );
          start();
        });
    });
  }

  function deleteDepartment() {
    connection.query(
      "SET FOREIGN_KEY_CHECKS=0; SELECT * FROM departments",
      (err, results) => {
        if (err) throw err;
        inquirer
          .prompt({
            name: "department",
            type: "list",
            message: "What department would you like to delete?",
            choices: () => results[1].map((result) => result.name),
          })
          .then((answer) => {
            let departmentID = results[1].filter(
              (result) => result.name === answer.department
            )[0].id;
            connection.query(`DELETE FROM departments WHERE ? `, {
              id: departmentID,
            });
            console.log(
              "Successfully deleted the " + answer.department + " department."
            );
            start();
          });
      }
    );
  }

  function deleteRole() {
    connection.query(
      "SET FOREIGN_KEY_CHECKS=0; SELECT * FROM role",
      (err, results) => {
        if (err) throw err;
        inquirer
          .prompt({
            name: "role",
            type: "list",
            message: "What role would you like to delete?",
            choices: () => results[1].map((result) => result.title),
          })
          .then((answer) => {
            connection.query(`DELETE FROM role WHERE ? `, {
              title: answer.role,
            });
            console.log("Successfully deleted the role of: " + answer.role);
            start();
          });
      }
    );
  }

  function deleteEmployee() {
    connection.query("SELECT * FROM employee", (err, results) => {
      if (err) throw err;
      inquirer
        .prompt({
          name: "employee",
          type: "list",
          message: "What employee would you like to delete?",
          choices: () =>
            results.map(
              (results) => results.first_name + " " + results.last_name
            ),
        })
        .then((answer) => {
          let employeeID = results.filter(
            (result) =>
              result.first_name + " " + result.last_name === answer.employee
          )[0].id;
          connection.query(`DELETE FROM employee WHERE ? `, {
            id: employeeID,
          });
          console.log(
            "Successfully deleted " +
              answer.employee +
              " from the employee database"
          );
          start();
        });
    });
  }
}
