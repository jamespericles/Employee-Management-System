***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

// let logoText = `
//  _____                _
// |  ___|              | |
// | |__ _ __ ___  _ __ | | ___  _   _  ___  ___
// |  __| '_ ` _ \| '_ \| |/ _ \| | | |/ _ \/ _ \
// | |__| | | | | | |_) | | (_) | |_| |  __/  __/
// \____/_| |_| |_| .__/|_|\___/ \__, |\___|\___|
//               | |             __/ |
//               |_|            |___/
// ___  ___                                                  _
// |  \/  |                                                 | |
// | .  . | __ _ _ __   __ _  __ _  ___ _ __ ___   ___ _ __ | |_
// | |\/| |/ _` | '_ \ / _` |/ _` |/ _ \ '_ ` _ \ / _ \ '_ \| __|
// | |  | | (_| | | | | (_| | (_| |  __/ | | | | |  __/ | | | |_
// \_|  |_/\__,_|_| |_|\__,_|\__, |\___|_| |_| |_|\___|_| |_|\__|
//                          __/ |
//                          |___/
// _____           _
// /  ___|         | |
// \ `--. _   _ ___| |_ ___ _ __ ___
// `--. \ | | / __| __/ _ \ '_ ` _ \
// /\__/ / |_| \__ \ ||  __/ | | | | |
// \____/ \__, |___/\__\___|_| |_| |_|
//        __/ |
//       |___/
// `

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

***REMOVED******REMOVED***

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
