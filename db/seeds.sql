USE employees_db;

INSERT INTO department
    (name)
VALUES
    ("Sales"),
    ("Marketing"),
    ("Legal"),
    ("Engineering");

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Data Analyst", 80000, 1),
    ("Marketing Director", 100000, 2),
    ("Lawyer", 140000, 3),
    ("Senior Developer", 100000, 4);

INSERT INTO employees
    (first_name, last_name, role_id)
VALUES
    ("Mike", "Myers", 1),
    ("Sam", "Smith", 2),
    ("Quinn", "Denver", 3),
    ("Wendy", "Abbot", 4);
    