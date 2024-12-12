# 📊 Employee Tracker CLI Application


# 📝 Description
1. The Employee Tracker is a command-line interface (CLI) application designed to manage a company's employee database. It allows business owners to view and manage departments, roles, and employees, helping them organize and plan their operations efficiently.


# 🚀 Table of Contents
1. Installation
2. Usage
3. Features
4. Environment Variables
5. Demo Walkthrough
6. Dependencies
7. License

# 💻 Installation
1. Clone the Repository:

* bash
* Copy code: git clone https://github.com/yourusername/employee-tracker.git
* cd employee-tracker

2. Install Dependencies:

* bash
* Copy code:
* npm install -g typescript
* npm install --save-dev ts-node

3. Set Up Database Schema and Seed Data:

* bash
* Copy code: 
* psql -U postgres(enter credntials)
* once in postgres = \i schema.sql + \i seeds.sql

4. Compile TypeScript:

* bash
* Copy code: 
* npx tsc

5. Run the Application:

* bash
* cd into the "src folder" and copy code: node index.js

5. Alternatively, you can run the TypeScript file directly with ts-node:

* bash: 
* Copy code
* npx ts-node src/index.ts
* Follow the Prompts

6. The main menu will display the following options:

* View All Departments
* View All Roles
* View All Employees
* Add Department
* Add Role
* Add Employee
* Update Employee Role
* Exit


# ✨ Features
* View All Departments: Displays a formatted table with department names and IDs.
* View All Roles: Shows job titles, role IDs, associated departments, and salaries.
* View All Employees: Displays employee details including names, roles, departments, salaries, and managers.
* Add a Department: Prompts for a department name and adds it to the database.
* Add a Role: Allows adding a new role with a title, salary, and department.
* Add an Employee: Adds a new employee with their name, role, and manager.
* Update Employee Role: Updates an employee's role by selecting a new role.
* Exit: Closes the application.

# 🔐 Environment Variables
1. Create a .env file in the root directory with the following variables:

* Copy code
* DB_HOST=localhost
* DB_USER="yourusername"
* DB_PASSWORD="yourpassword"

2. Replace yourusername and yourpassword with your PostgreSQL credentials.

# 🎥 Demo Walkthrough
Walkthrough Video: https://app.screencastify.com/v3/watch/3IqRkYDkTmvru4BCnElV


# 📦 Dependencies
* Node.js: JavaScript runtime environment.
* TypeScript: Typed superset of JavaScript.
* Inquirer: For CLI prompts.
* pg: PostgreSQL client for Node.js.
* dotenv: For loading environment variables.
* console.table: To display data in table format.


# 📝 License
This project is licensed under the MIT License.

