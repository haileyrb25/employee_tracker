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

INSERT INTO employee
    (first_name, last_name, role_id, manager_name)
VALUES
    ("Mike", "Myers", 1, "null"),
    ("Adam", "Shaw", 1, "Mike"),
    ("David", "Perez", 1, "Mike"),
    ("Sam", "Smith", 2, "null"),
    ("Judy", "Campos", 2, "Sam"),
    ("Melissa", "Creed", 2, "Judy"),
    ("Quinn", "Denver", 3, "null"),
    ("Kayla", "Swindle", 3, "Quinn"),
    ("Riley", "Knight", 3, "Quinn"),
    ("Eddie", "Ramirez", 4, "null"),
    ("Steven", "McIntyre", 4, "Eddie"),
    ("Wendy", "Abbot", 4, "Eddie");
    