-- Departments
INSERT INTO department (name) VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');

-- Roles
INSERT INTO role (title, salary, department_id) VALUES 
('Sales Manager', 75000, 1),
('Software Engineer', 100000, 2),
('Accountant', 65000, 3),
('Legal Advisor', 90000, 4);

-- Employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Mary', 'Johnson', 3, NULL),
('James', 'Brown', 4, NULL);
