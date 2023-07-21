/* inserts data into department table */ 
INSERT INTO department (name)
VALUES ("Engineering"),
    ("Finance"),
    ("Legal"),
    ("Sales");

/* inserts data indo role table */ 
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
    ("Salesperson", 80000, 1),
    ("Lead Engineer", 150000, 2),
    ("Software Engineer", 120000, 2),
    ("Account Manager", 160000, 2),
    ("Accountant", 125000, 3),
    ("Legal Team Lead", 250000, 3),
    ("Lawyer", 190000, 4);

/* inserts data into employee table */ 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ("David", "Bowie", 2, NULL),
    ("Tony", "Iommi", 3, NULL),
    ("O'Shea", "Jackson", 2, NULL),
    ("André", "Benjamin", 4, NULL),
    ("Robert", "Diggs", 1, NULL),
    ("Eric", "Wright", 3, NULL),
    ("Kanye", "West", 2, NULL),
    ("Steve", "Austin", 3, NULL),
    ("Terry", "Bollea", 1, NULL),
    ("Richard", "Fliehr", 2, NULL),
    ("Mark", "Calaway", 3, NULL),
    ("Bret", "Hart", 4, NULL),
    ("Shawn", "Michaels", 1, NULL),
    ("Paul", "Levesque", 3, NULL),
    ("Lemmy", "Kilmister", 2, NULL),
    ("Brenden", "Fraser", 3, NULL),
    ("Steve", "Buscemi", 4, NULL);
