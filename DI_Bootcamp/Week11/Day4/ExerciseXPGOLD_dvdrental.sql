-- You were hired to babysit your cousin and you want to find a few movies that he can watch with you.
-- Find out how many films there are for each rating.
SELECT count(rating), rating FROM film GROUP BY rating

-- Get a list of all the movies that have a rating of G or PG-13.
-- Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
SELECT * FROM film WHERE rating in ('G', 'PG-13') 
AND length < 120 AND rental_rate < 3.00 ORDER BY title ASC

-- Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
UPDATE customer 
SET first_name = 'Hans', last_name = 'Jugurnauth', email = 'teevijh@gmail.com'
WHERE customer_id = 5


-- Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).

UPDATE address 
SET address = 'Mont Choisy'
WHERE address_id = 5