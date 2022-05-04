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
    ("Sales Director", 105000, 1),
    ("Salesman", 60000, 1),
    ("Marketing Director", 100000, 2),
    ("Public Relations Manager", 95000, 2),
    ("Design Tech", 77000, 2),
    ("Lawyer", 140000, 3),
    ("Researcher", 50000, 3),
    ("Legal Assistant", 64000, 3),
    ("Senior Developer", 100000, 4),
    ("Web Designer", 75000, 4),
    ("Engineer", 140000, 4);

INSERT INTO employees
    (first_name, last_name, role_id)
VALUES
    ("Mike", "Myers", 1),
    ("Adam", "Shaw", 1),
    ("David", "Perez", 1),
    ("Sam", "Smith", 2),
    ("Judy", "Campos", 2),
    ("Melissa", "Creed", 2),
    ("Quinn", "Denver", 3),
    ("Kayla", "Swindle", 3),
    ("Riley", "Knight", 3),
    ("Eddie", "Ramirez", 4),
    ("Steven", "McIntyre", 4),
    ("Wendy", "Abbot", 4);
    