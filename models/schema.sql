CREATE DATABASE SyllaCode;

USE SyllaCode;

CREATE TABLE Users
(
id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id),
name VARCHAR(255),
email VARCHAR (255),
password VARCHAR (255),
rank integer (10),
createdAt VARCHAR (255),
updatedAt VARCHAR (255)
);