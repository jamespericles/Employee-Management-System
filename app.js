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

  // Logic for adding a department
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

***REMOVED***
***REMOVED***
***REMOVED***"SELECT * FROM employee", (err, results) => {
    ***REMOVED***
***REMOVED***
    ***REMOVED***
  ***REMOVED***);
***REMOVED***

***REMOVED***
***REMOVED***
      "SELECT * FROM departments, employee, role",
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
    ***REMOVED***``);
        ***REMOVED***);
    ***REMOVED***
***REMOVED***;
***REMOVED***

***REMOVED******REMOVED***

***REMOVED******REMOVED***

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
