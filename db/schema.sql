DROP DATABASE IF EXISTS ordertracker_db;
CREATE DATABASE ordertracker_db;

USE ordertracker_db;

drop table if exists orders;

CREATE TABLE orders (
    id int not null primary key auto_increment,
    name varchar(40),
    completed boolean default false,
    updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    created_at TIMESTAMP NOT NULL
);