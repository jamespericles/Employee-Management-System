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
- view team's based on common manager's
- view how much each department is is spending on salary
- update who is set as the manager of an employee
- update an employee's current role

All functions update the appropriate rows and data within each table. Also when applicable, a query is run to return all current data from a table as a list of choices within the inquirer prompts. For example, when adding a new employee, the user is prompted what their first and last name is, and what the employee's role is. The choices for the role are only what roles currently exist in the database.

Some cool things I want to draw attention to. I had a lot of trouble allowing the user to update the role of an employee. My plan was as follows...

1. Prompt the user with "What employee's role would you like to update?" and offer them a list of all employees that exist in the `employee` table
2. Prompt the user with "What is that employee's new role?" and offer them a list of all roles that exist in the `role` table
3. Take the information from both those questions and filter them to get their appropriate IDs within their respective tables (this prevents the user from having to use the IDs when selecting employees and roles even though I need that data for the next step)
4. Use those IDs to make the appropriate changes and return the user to the start

I first tried to nest a query to select all role from the `role` table after first querying all the employees from the `employee` table as choices for the first prompt. This ended up causing issues as there was no way to pass the answer from the first question into the next query that was within a `.then()` function.

I then tried a query that selected all from both the `employee` and `role` table, provide my questions as an array in a single inquirer prompt as opposed to separate inquirer functions. This solved the issue os passing the answer along from the first prompt, but what I found was that because `.title` is a characteristic of both `employee` and `role`, my second `.map()` function was returning roles \* number of employees (if there was 5 unique roles and 5 employees, there'd be 5 for each role returned as a possible choice). It also would only update whatever employee had the id of 1 because they existed in both tables.

I finally solved this by querying both tables simultaneously and treating the returned data as an array, one for my `employee` table and another for my `role` table.

How cool is that?

Using that solution, I was able to use my `.map()` function for both prompts without either affecting one another. I was also finally able to filter my data appropriately and use it to update my database properly!

The second hurdle I came across was if the user wanted to delete a department before deleting any roles that exist within it, or to delete a role before deleting any employees that have that role assigned to them.

Currently my schema is set up so that `role_id` within `employee` references `id` within `role`. And `department_id` references `id` within `departments`. The user would have to first delete the employee before that employee's role could be deleted, before that role's department could be deleted. This is clearly unintuitive and against the user experience.

Using the knowledge I gained from the first hurdle I overcame, I changed my queries for both functions to be `SET FOREIGN_KEY_CHECKS=0; SELECT * FROM departments"` which solved my problem by preventing the database to check the foreign keys given that that wasn't necessary for this function in the first place.

Overall this project was quite challenging but incredibly rewarding and I'm proud of the work ethic I showed while completing this project.

### <a name="Screenshots"></a>Screenshots

[Start Screen](https://github.com/jamespericles/Employee-Management-System/blob/master/screenshots/start_screen.png)

[Following the prompts](https://github.com/jamespericles/Employee-Management-System/blob/master/screenshots/following_the_prompts.png)

Demo on [youtube](https://youtu.be/LE_2kib0kuw)

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

- (My github homepage)[https://github.com/jamespericles] 
- (This project's repo)[https://github.com/jamespericles/Employee-Management-System]
