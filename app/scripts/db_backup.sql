CREATE DATABASE clients_db;

CREATE TABLE clients (
	id serial PRIMARY KEY,
	name VARCHAR ( 255 ) NOT NULL,
	lastname VARCHAR ( 255 ) NOT NULL,
	birthdate TIMESTAMP NOT NULL 
);

CREATE OR REPLACE FUNCTION datediff(timestamp) 
RETURNS int 
LANGUAGE sql 
AS
$$
    SELECT DATE_PART('year', AGE(NOW(), CAST($1 AS date))) AS age;
$$;