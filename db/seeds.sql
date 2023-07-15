INSERT INTO department (name)
VALUES ("Engineering"),
    ("Finance"),
    ("Legal"),
    ("Sales");

SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
    ("Salesperson", 80000, 1),
    ("Lead Engineer", 150000, 2),
    ("Software Engineer", 120000, 2),
    ("Account Manager", 160000, 2),
    ("Accountant", 125000, 3),
    ("Legal Team Lead", 250000, 3),
    ("Lawyer", 190000, 4);

SELECT * FROM role;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mick", "Jagger", 1, NULL),
    ("David", "Bowie", 2, NULL),
    ("Jimmy", "Page", 3, NULL),
    ("Angus", "Young", 4, NULL),
    ("Bon", "Scott", 1, NULL),
    ("Ozzy", "Osbourne", 2, NULL),
    ("Tony", "Iommi", 3, NULL),
    ("Joe", "Mama", 4, NULL),
    ("Eddie", "Van Halen", 1, NULL),
    ("David", "Lee Roth", 2, NULL),
    ("Kurt", "Cobain", 3, NULL),
    ("Eddie", "Vedder", 4, NULL),
    ("Tupac", "Shakur", 1, NULL),
    ("Christopher", "Wallace", 2, NULL),
    ("Shawn", "Carter", 3, NULL),
    ("Marshall", "Mathers", 4, NULL),
    ("Calvin", "Broadus", 1, NULL),
    ("O'Shea", "Jackson", 2, NULL),
    ("James", "Smith", 3, NULL),
    ("André", "Benjamin", 4, NULL),
    ("Robert", "Diggs", 1, NULL),
    ("Nate", "Diaz", 2, NULL),
    ("Eric", "Wright", 3, NULL),
    ("Kendrick", "Duckworth", 4, NULL),
    ("Jermaine", "Cole", 1, NULL),
    ("Kanye", "West", 2, NULL),
    ("Steve", "Austin", 3, NULL),
    ("Dwayne", "Johnson", 4, NULL),
    ("Terry", "Bollea", 1, NULL),
    ("Richard", "Fliehr", 2, NULL),
    ("Mark", "Calaway", 3, NULL),
    ("Bret", "Hart", 4, NULL),
    ("Shawn", "Michaels", 1, NULL),
    ("John", "Cena", 2, NULL),
    ("Paul", "Levesque", 3, NULL),
    ("Kurt", "Angle", 4, NULL),
    ("Adam", "Sandler", 1, NULL),
    ("Lemmy", "Kilmister", 2, NULL),
    ("Brenden", "Fraser", 3, NULL),
    ("Steve", "Buscemi", 4, NULL);



SELECT * FROM employee;