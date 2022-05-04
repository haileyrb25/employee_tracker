SELECT department.department_name AS role, role.title
FROM role
LEFT JOIN department
ON role.department_id = department.id
ORDER BY department.department_name;