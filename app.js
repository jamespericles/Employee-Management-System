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
          ***REMOVED***
***REMOVED***
        ***REMOVED***;
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
          ***REMOVED***answers.role + " successfully add to roles.");
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
            ***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
          ***REMOVED***;
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
***REMOVED***;
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
        ***REMOVED***results);
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
      ***REMOVED***)
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
      ***REMOVED***[0].manager_id;
  ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    ***REMOVED***
    ***REMOVED***
          IFNULL(r.title, "No Data") AS "Title", 
          IFNULL(d.name, "No Data") AS "Department", 
    ***REMOVED***
    ***REMOVED***
      ***REMOVED***
      ***REMOVED***
      ***REMOVED***
      ***REMOVED***
      ***REMOVED***
      ***REMOVED***
          WHERE CONCAT(m.first_name," ",m.last_name) = ?
          ORDER BY e.id`,

            [managerID]
      ***REMOVED***;
          console.table(answer.manager + "'s Team: ", results);
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
  ***REMOVED***
    ***REMOVED***
        ***REMOVED***
***REMOVED***
***REMOVED***
    ***REMOVED*** results[0].map((result) => result.title),
          ***REMOVED***,
  ***REMOVED***
      ***REMOVED***
        ***REMOVED***
***REMOVED*** "What department does this role belong to?",
    ***REMOVED*** results[1].map((result) => result.name),
          ***REMOVED***,
    ***REMOVED***
  ***REMOVED***
***REMOVED***
  ***REMOVED***
        ***REMOVED***[0].id;
***REMOVED***
  ***REMOVED*** result.name === answers.department
        ***REMOVED***[0].id;
    ***REMOVED***`UPDATE role set department_id = ? WHERE id = ?`, [
***REMOVED***
***REMOVED***
      ***REMOVED***;
          ***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
        ***REMOVED***;
          ***REMOVED***
        ***REMOVED***);
    ***REMOVED***
***REMOVED***;
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
***REMOVED*** "What employee's role would you like to update?",
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
***REMOVED*** "What is this employee's new role?",
***REMOVED***
    ***REMOVED*** results[1].map((result) => result.title),
          ***REMOVED***,
    ***REMOVED***
  ***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
  ***REMOVED***
***REMOVED***
        ***REMOVED***[0].id;
***REMOVED***
  ***REMOVED***
        ***REMOVED***[0].id;
    ***REMOVED***`UPDATE employee SET role_id = ? WHERE id = ?`, [
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
    ***REMOVED***
      ***REMOVED***
***REMOVED***
  ***REMOVED*** results[1].map((result) => result.name),
        ***REMOVED***)
  ***REMOVED***
***REMOVED***
  ***REMOVED*** result.name === answer.department
        ***REMOVED***[0].id;
    ***REMOVED***`DELETE FROM departments WHERE ? `, {
***REMOVED***
          ***REMOVED***);
          ***REMOVED***
***REMOVED***
        ***REMOVED***;
          ***REMOVED***
        ***REMOVED***);
    ***REMOVED***
***REMOVED***;
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
  ***REMOVED*** results[1].map((result) => result.title),
        ***REMOVED***)
  ***REMOVED***
    ***REMOVED***`DELETE FROM role WHERE ? `, {
***REMOVED***
          ***REMOVED***);
          ***REMOVED***"Successfully deleted the role of: " + answer.role);
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
        ***REMOVED***,
      ***REMOVED***)
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
      ***REMOVED***[0].id;
  ***REMOVED***`DELETE FROM employee WHERE ? `, {
***REMOVED***
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
