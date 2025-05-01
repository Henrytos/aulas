CREATE DATABASE modify;
USE modify;

CREATE TABLE tbl_user(
    idUser INT PRIMARY KEY AUTO_INCREMENT,
    nameUser VARCHAR(40) NOT NULL,
    emailUser VARCHAR(60) NOT NULL,
    passwordUser VARCHAR(30) NOT NULL   
);