***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
    ***REMOVED***)
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
    ***REMOVED***)
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
    ***REMOVED***)
***REMOVED***
***REMOVED***
***REMOVED***"connected as id " + connection.threadId + "\n");
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
        "Update employee managers.",
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
  ***REMOVED***)
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

        case "View employees with the same manager":
***REMOVED***
***REMOVED***

        case "Update employee managers.":
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
    ***REMOVED***
  ***REMOVED***);

***REMOVED***
  ***REMOVED***
  ***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
    ***REMOVED***)
  ***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
        ***REMOVED***,
***REMOVED***
          ***REMOVED***
          ***REMOVED***"Data appended successfully");
***REMOVED***
          ***REMOVED***
        ***REMOVED***
    ***REMOVED***;
    ***REMOVED***);
***REMOVED***

***REMOVED***
  ***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
  ***REMOVED***
***REMOVED***
      ***REMOVED***,
***REMOVED***
***REMOVED***
  ***REMOVED***
***REMOVED***
***REMOVED***
      ***REMOVED***,
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
        ***REMOVED***,
***REMOVED***
          ***REMOVED***
          ***REMOVED***"Data appended successfully");
***REMOVED***
          ***REMOVED***
        ***REMOVED***
    ***REMOVED***;
    ***REMOVED***);
***REMOVED***
  // Need to somehow communicate with the role and department tables? filter functions?
***REMOVED***
***REMOVED***
    ***REMOVED***
    ***REMOVED***
  ***REMOVED***
***REMOVED***
***REMOVED***
    ***REMOVED***
***REMOVED***
        ***REMOVED***,
***REMOVED***
***REMOVED***
    ***REMOVED***
***REMOVED***
        ***REMOVED***,
***REMOVED***
  ***REMOVED***
      ***REMOVED***
***REMOVED***
***REMOVED***
        ***REMOVED***,
  ***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
      ***REMOVED***[0].id;
  ***REMOVED***
***REMOVED***
  ***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
          ***REMOVED***,
***REMOVED***
            ***REMOVED***
            ***REMOVED***"Data appended successfully");
  ***REMOVED***
            ***REMOVED***
          ***REMOVED***
      ***REMOVED***;
      ***REMOVED***);
  ***REMOVED***);
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
    ***REMOVED***
***REMOVED***
    ***REMOVED***
  ***REMOVED***);
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
    ***REMOVED***
***REMOVED***
    ***REMOVED***
  ***REMOVED***);
***REMOVED***
  // Title, department, manager_id returned instead of manager, and salary not returned
***REMOVED***
***REMOVED***
***REMOVED***"SELECT * FROM employee", (err, results) => {
    ***REMOVED***
***REMOVED***
    ***REMOVED***
  ***REMOVED***);
***REMOVED***
  // Need help continuing
***REMOVED***
***REMOVED***
    ***REMOVED***
    ***REMOVED***
    ***REMOVED***
  ***REMOVED***
    ***REMOVED***
          message: "Which department budget would you like to view?",
***REMOVED*** results.map((result) => result.name),
      ***REMOVED***)
***REMOVED***
  ***REMOVED***`SELECT * FROM role WHERE ? `, {
            id: answer.department,
        ***REMOVED***);
      ***REMOVED***);
  ***REMOVED***);
***REMOVED***
  // Not started
***REMOVED******REMOVED***
  // Returning error related to mysql syntax
***REMOVED***
***REMOVED***"SELECT * FROM employee", (err, results) => {
    ***REMOVED***
    ***REMOVED***
  ***REMOVED***
***REMOVED***
***REMOVED***
      ***REMOVED***
***REMOVED***
  ***REMOVED***
***REMOVED***
    ***REMOVED*** result.first_name + " " + result.last_name
          ***REMOVED***,
        ***REMOVED***,
***REMOVED***
  ***REMOVED***
      ***REMOVED***
***REMOVED***
  ***REMOVED***
***REMOVED***
    ***REMOVED*** result.first_name + " " + result.last_name
          ***REMOVED***,
        ***REMOVED***,
  ***REMOVED***
***REMOVED***
          let employeeId = results.filter(
***REMOVED***
***REMOVED***
      ***REMOVED***[0].id;
          let managerId = results.filter(
***REMOVED***
***REMOVED***
      ***REMOVED***[0].manager_id;
  ***REMOVED***`UPDATE employee SET = ? WHERE ? `, {
            id: employeeId,
            manager_id: managerId,
        ***REMOVED***);
        ***REMOVED***
            answers.manager + "is now the manager of " + answers.employee
      ***REMOVED***;
        ***REMOVED***
      ***REMOVED***);
  ***REMOVED***);
***REMOVED***

***REMOVED***
***REMOVED***
    ***REMOVED***
    ***REMOVED***
    ***REMOVED***
  ***REMOVED***
    ***REMOVED***
          message: "What department would you like to delete?",
***REMOVED*** results.map((result) => result.name),
      ***REMOVED***)
***REMOVED***
  ***REMOVED***`DELETE FROM departments WHERE ? `, {
***REMOVED***
        ***REMOVED***);
        ***REMOVED***
            "Successfully deleted the : " + answer.department + "department."
      ***REMOVED***;
        ***REMOVED***
      ***REMOVED***);
  ***REMOVED***);
***REMOVED***

***REMOVED***
***REMOVED***
    ***REMOVED***
    ***REMOVED***
    ***REMOVED***
***REMOVED***
    ***REMOVED***
          message: "What role would you like to delete?",
***REMOVED*** results.map((result) => result.title),
      ***REMOVED***)
***REMOVED***
  ***REMOVED***`DELETE FROM role WHERE ? `, {
            title: answer.role,
        ***REMOVED***);
        ***REMOVED***"Successfully deleted the role of: " + answer.role);
        ***REMOVED***
      ***REMOVED***);
  ***REMOVED***);
***REMOVED***

***REMOVED***
***REMOVED***"SELECT * FROM employee", (err, results) => {
    ***REMOVED***
    ***REMOVED***
    ***REMOVED***
***REMOVED***
    ***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
        ***REMOVED***,
      ***REMOVED***)
***REMOVED***
  ***REMOVED***`DELETE FROM employee WHERE ? `, {
            first_name: answer.employee,
        ***REMOVED***);
        ***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
      ***REMOVED***;
        ***REMOVED***
      ***REMOVED***);
  ***REMOVED***);
***REMOVED***
***REMOVED***
