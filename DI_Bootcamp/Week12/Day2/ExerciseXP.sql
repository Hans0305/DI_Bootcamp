-- EXERCISE 1

-- 1. select name from language

-- 2.  SELECT title, description, name FROM film
--     LEFT JOIN language ON language.language_id = film.language_id

 -- 3. CREATE TABLE new_film(
 --    id serial unique,
 --    name varchar(255) )
-- INSERT INTO new_film (name) values 
--     ('Avatar Way of Water'),
--     ('John Wick 100000'),
--     ('Fast & Furious')


-- 4. -- CREATE TABLE customer_review(
--     review_id serial primary key not null,
--     film_id integer references new_film(id) on delete cascade,
--     language_id integer references language(language_id) on delete no action,
--     title text,
--     score NUMERIC(10),
--     review_text text,
--     last_update date
-- )

-- 5.  INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update) values 
--     (1, 1, 'tom & Jerry', 8, 'Cool movie', '2012-04-07'),
--     (2, 1, 'tom & jerry2', 7, 'bad movie', '2022-12-12') 


-- 6. delete from new_film where id = 1 
-- the movies gets deleted. 




-- EXERCISE 2

-- 1. UPDATE film SET language_id = 4 where film_id = 55

-- 2. need help

-- 3. DROP TABLE customer_review
-- it is an easy step because the table has no foreign keys and is not associated to other tables. 


-- 4. select count(*) from rental where return_date is null

-- 5. select film.title, film.rental_rate from film
-- *need help for this query*

-- 6. 1.  SELECT film.title, film.description, actor.first_name, actor.last_name FROM film 
left join film_actor on film.film_id = film_actor.film_id
left join actor on actor.actor_id = film_actor.actor_id 
WHERE lower(film.description) like '%sumo%wrestler%'
and lower(actor.first_name) like '%penelope%'
and lower(actor.last_name) like '%monroe%'


-- 2.  SELECT * from film 
 left join film_category on film_category.film_id = film.film_id
 LEFT JOIN category on film_category.category_id = category.category_id
 WHERE film.rating = 'R' and film.length < 60
 and category.name = 'Documentary'
 
 



