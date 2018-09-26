create database burgers_db;

use burgers_db;

create table burgers
(
  id int primary key not null,
  burger_name varchar(100) not null,
  devoured tinyint,
  createdAt timestamp default current_timestamp
);