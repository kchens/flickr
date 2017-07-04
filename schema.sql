DROP DATABASE IF EXISTS flickr;

CREATE DATABASE flickr;

USE flickr;

CREATE TABLE images (
  id INT NOT NULL AUTO_INCREMENT,
  flickr_id BIGINT,
  flickr_url VARCHAR(500),
  date_taken VARCHAR(30),
  date_published VARCHAR(30),
  author VARCHAR(100),
  PRIMARY KEY(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

-- INSERT INTO kanyes (era, year, description, imageUrl) VALUES ("College Dropout", 2004, "one of the all time best kanyes", "https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg");
