CREATE DATABASE SyllaCode;

USE SyllaCode;

CREATE TABLE Users
(
id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id),
email VARCHAR (255),
password VARCHAR (255),
createdAt VARCHAR (255),
updatedAt VARCHAR (255)
);