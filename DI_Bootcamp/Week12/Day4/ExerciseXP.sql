-- 1. SELECT first_name, last_name, salary FROM employees
-- WHERE salary > (SELECT salary FROM employees WHERE last_name like '%Bell%')


-- 2. 


-- 3. SELECT first_name, last_name FROM employees
--  WHERE employee_id in (SELECT DISTINCT manager_id FROM employees)


-- 4. SELECT first_name, last_name FROM employees
--  WHERE salary > (SELECT avg(salary) from employees)

-- 5. 

-- 6.  SELECT first_name, last_name FROM employees
-- where job_id not in (SELECT job_id FROM jobs WHERE job_title = 'Supervisor')


-- 7. 

-- 8.  SELECT salary FROM employees ORDER BY salary DESC
--  LIMIT 1 offset 5


-- 9. 

-- 10. 


-- JOINS 

-- 1. SELECT locations.location_id, street_address, city, state_province, country_name from locations
-- INNER JOIN departments ON departments.location_id = locations.location_id
-- INNER JOIN countries ON locations.country_id = countries.country_id


-- 2. SELECT first_name, last_name, employees.department_id, department_name from employees
-- LEFT JOIN departments on departments.department_id = employees.department_id


-- 3. SELECT first_name, last_name, job_title, employees.department_id, department_name from employees
-- LEFT JOIN departments on departments.department_id = employees.department_id
-- LEFT JOIN jobs on jobs.job_id = employees.job_id


-- 4. SELECT employees.employee_id, employees.last_name as Employee,
-- employees.manager_id, employees2.last_name as Manager from employees
-- LEFT JOIN employees as employees2 ON employees.manager_id = employees2.employee_id


-- 5. 


-- 6. SELECT employee_id, job_title, CURRENT_DATE-hire_date as work_days FROM employees
-- LEFT JOIN jobs on jobs.job_id = employees.job_id