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

***REMOVED***
***REMOVED***
      "SELECT DISTINCT * FROM employee, role",
***REMOVED***
      ***REMOVED***"results: ", results);
      ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
***REMOVED***
        ***REMOVED***
***REMOVED*** "What employee's role would you like to update?",
    ***REMOVED***
  ***REMOVED***
      ***REMOVED*** result.first_name + " " + result.last_name
            ***REMOVED***,
          ***REMOVED***,
  ***REMOVED***
    ***REMOVED***
        ***REMOVED***
***REMOVED*** "What is this employee's new role?",
  ***REMOVED***
          ***REMOVED***,
    ***REMOVED***
  ***REMOVED***
          ***REMOVED***"answers: ", answers);
  ***REMOVED***
  ***REMOVED***
***REMOVED***
        ***REMOVED***[0].id;
            let newRole = results.filter(
  ***REMOVED***
        ***REMOVED***[0].id;
          ***REMOVED***employeeID, "employee");
          ***REMOVED***newRole, "new role");
    ***REMOVED***`UPDATE employee SET role_id = ? WHERE id = ? `, [
***REMOVED***
***REMOVED***
      ***REMOVED***;
          ***REMOVED***
***REMOVED***
        ***REMOVED***;
          ***REMOVED***
        ***REMOVED***);
    ***REMOVED***
***REMOVED***;
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
***REMOVED***
***REMOVED***
***REMOVED***
      ***REMOVED***[0].id;
***REMOVED***
***REMOVED***
***REMOVED***
      ***REMOVED***[0].id;
  ***REMOVED***`UPDATE employee SET manager_id = ? WHERE id = ? `, [
***REMOVED***
***REMOVED***
    ***REMOVED***;
        ***REMOVED***
***REMOVED***
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
