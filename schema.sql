DROP DATABASE IF EXISTS flickr;

CREATE DATABASE flickr;

USE flickr;

CREATE TABLE images (
  id INT NOT NULL AUTO_INCREMENT,
  flickr_id BIGINT unsigned,
  flickr_url VARCHAR(500),
  date_taken VARCHAR(30),
  date_published BIGINT unsigned,
  author VARCHAR(100),
  is_favorite TINYINT unsigned DEFAULT 0,
  PRIMARY KEY(id)
);

-- CREATE TABLE favorites (
--   id INT NOT NULL AUTO_INCREMENT,
--   image_id BIGINT,
--   is_favorite TINYINT unsigned DEFAULT 0,
--   PRIMARY KEY(id)
-- );

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

-- INSERT INTO kanyes (era, year, description, imageUrl) VALUES ("College Dropout", 2004, "one of the all time best kanyes", "https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg");
-- INSERT INTO favorites (image_id, is_favorite) VALUES (35564982172, 1);
