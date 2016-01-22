CREATE DATABASE eventify;

USE eventify;

CREATE TABLE Users (
  userId int NOT NULL AUTO_INCREMENT,
  firstname varchar(150),
  lastname varchar(150),
  zipcode int,
  username varchar(150),
  Fbooktoken varchar(150),
  PRIMARY KEY (userId)
);

CREATE TABLE Events (

  eventId int NOT NULL AUTO_INCREMENT,
  name varchar(150),
  eventDate date,
  NumOfPeople int,
  pricePerPerson int,
  description varchar(150),
  PRIMARY KEY (eventId)

);