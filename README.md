# 📊 Employee Tracker CLI Application


# 📝 Description
1. The Employee Tracker is a command-line interface (CLI) application designed to manage a company's employee database. It allows business owners to view and manage departments, roles, and employees, helping them organize and plan their operations efficiently.
2. Built using Node.js, TypeScript, Inquirer, and PostgreSQL, this application provides a seamless way to interact with the database through simple prompts in the terminal.

# 🚀 Table of Contents
Installation
Usage
Features
Environment Variables
Demo Walkthrough
Dependencies
License

# 💻 Installation
1. Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/employee-tracker.git
cd employee-tracker
Install Dependencies:

bash
Copy code
npm install
Install TypeScript Globally (if not already installed):

bash
Copy code
npm install -g typescript
Install ts-node (for running TypeScript directly):

bash
Copy code
npm install --save-dev ts-node
Set Up PostgreSQL Database:

2. Ensure you have PostgreSQL installed. Create a new database called employeetracker:

bash
Copy code
createdb employeetracker
Set Up Database Schema and Seed Data:

3. Run the following commands to set up the schema and populate the database:

bash
Copy code
psql -U yourusername -d employeetracker -f src/db/schema.sql
psql -U yourusername -d employeetracker -f src/db/seeds.sql

▶️ Usage
Compile TypeScript:

bash
Copy code
npx tsc
Run the Application:

bash
Copy code
node dist/index.js

4. Alternatively, you can run the TypeScript file directly with ts-node:

bash: 
* Copy code
* npx ts-node src/index.ts
* Follow the Prompts:

5. The main menu will display the following options:

* View All Departments
* View All Roles
* View All Employees
* Add Department
* Add Role
* Add Employee
* Update Employee Role
* Exit


# ✨ Features
View All Departments: Displays a formatted table with department names and IDs.
View All Roles: Shows job titles, role IDs, associated departments, and salaries.
View All Employees: Displays employee details including names, roles, departments, salaries, and managers.
Add a Department: Prompts for a department name and adds it to the database.
Add a Role: Allows adding a new role with a title, salary, and department.
Add an Employee: Adds a new employee with their name, role, and manager.
Update Employee Role: Updates an employee's role by selecting a new role.
Exit: Closes the application.

# 🔐 Environment Variables
Create a .env file in the root directory with the following variables:

1. 
Copy code
DB_HOST=localhost
DB_USER="yourusername"
DB_PASSWORD="yourpassword"

2. Replace yourusername and yourpassword with your PostgreSQL credentials.

# 🎥 Demo Walkthrough
Walkthrough Video:



This video demonstrates the functionality of the Employee Tracker CLI, including all acceptance criteria such as viewing, adding, and updating departments, roles, and employees.


# 📦 Dependencies
* Node.js: JavaScript runtime environment.
* TypeScript: Typed superset of JavaScript.
* Inquirer: For CLI prompts.
* pg: PostgreSQL client for Node.js.
* dotenv: For loading environment variables.
* console.table: To display data in table format.


# 📝 License
This project is licensed under the MIT License.

