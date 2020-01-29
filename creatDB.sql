DROP DATABASE IF EXISTS web;
CREATE DATABASE web;

USE web;

CREATE TABLE `user` (
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`prenom` VARCHAR(50) NOT NULL,
	`nom` VARCHAR(50) NOT NULL,
	`adresse` VARCHAR(100),
	`cp` INT,
	`ville` VARCHAR(50),
	`tel` VARCHAR(12) NOT NULL,
	`email` VARCHAR(50) NOT NULL,
	`civ` CHAR(1),
	`login` VARCHAR(50) NOT NULL,
	`password` VARCHAR(50) NOT NULL,
	`pays` VARCHAR(50)
);

CREATE TABLE `hotel` (
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	`nom` VARCHAR(50) NOT NULL,
	`prix` INT(100)NOT NULL,
	`img` VARCHAR(200) NOT NULL,
	`desc` VARCHAR(500) NOT NULL

);

INSERT INTO user VALUES (NULL,"bruno","MALVY","TEST avenue TEST",67000,"STRASBOURG","+33623456789","test@gmail.com","H","bruno.malvy","1234","FRANCE");
INSERT INTO user VALUES (NULL,"bruno","MALVY","TEST avenue TEST",67000,"STRASBOURG","+33623456789","test@gmail.com","H","bruno.malvy","1234","FRANCE");
INSERT INTO user VALUES (NULL,"bruno","MALVY","TEST avenue TEST",67000,"STRASBOURG","+33623456789","test@gmail.com","H","bruno.malvy","1234","FRANCE");

INSERT INTO hotel VALUES (NULL,"Hotel Strasbourg",123,"https://image.noelshack.com/fichiers/2019/43/6/1572123835-1.jpeg","Super Hotel sur Strasbourg ! Situé devant la cathédrale, une vue magnifique pour un prix mini");
INSERT INTO hotel VALUES (NULL,"Hotel Strasbourg",123,"https://image.noelshack.com/fichiers/2019/43/6/1572123835-1.jpeg","Super Hotel sur Strasbourg ! Situé devant la cathédrale, une vue magnifique pour un prix mini");
INSERT INTO hotel VALUES (NULL,"Hotel Strasbourg",123,"https://image.noelshack.com/fichiers/2019/43/6/1572123835-1.jpeg","Super Hotel sur Strasbourg ! Situé devant la cathédrale, une vue magnifique pour un prix mini");
