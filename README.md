# Employee Managment System [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

---

## Table of Contents

---

### [Description](#Description)

### [Screenshots](#Screenshots)

### [Installation](#Installation)

### [Usage](#Usage)

### [License](#License)

### [Contributing](#Contributing)

### [Questions](#Questions)

### [Github](#Github)

---

### <a name="Description"></a>Description

The Employee Management System is a CLI based application written in Javascript utilizing node, inquirer and mySQL on the backend to provide the user with a large array of possible functions. The mySQL database schema has a table for departments, roles, and employees that allow for the user to manipulate the data within each table in several ways.

Users are able to ...
- add, view or delete
  - employees 
  - departments 
  - roles 
- update who is set as the manager of an employee 
- update an employee's current role

All functions update the appropriate rows and data within each table. Also when applicable, a query is run to return all current data from a table as a list of choices within the inquirer prompts. For example, when adding a new employee, the user is prompted what their first and last name is, and what the employee's role is. The choices for the role are only what roles currently exist in the database.

### <a name="Screenshots"></a>Screenshots

WIP

### <a name="Installation"></a>Installation

After downloading the repository, run `npm i` to install several dependencies for the package. Afterwards run `node app.js` to start the application.

Besides that, either from the command line or from mySQL Workbench, use the `EMS-Schema.sql` file to generate the appropriate schema for your database and `seeds.sql` to import dummy data to get started. If you choose not to use the dummy data, I recommend first creating the departments, then the roles within each departments, and then the employees.

### <a name="Usage"></a>Usage

Employee Management System is a handy tool for managers who want to be able to keep track of all employees, know what role they fulfil and what department they belong to while also being able to make changes to their database as well.

### <a name="License"></a>License

MIT License

Copyright (c) 2020 James Pericles

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### <a name="Contributing"></a>Contributing

Anyone is welcome to iterate on this project. If you have any questions related to the project or its license, I can be contacted at the email below.

### <a name="Questions"></a>Questions

I can be reached at james.pericles@aol.com with any questions regarding this project.

### <a name="Github"></a>Github

https://github.com/jamespericles https://github.com/jamespericles/Employee-Management-System
