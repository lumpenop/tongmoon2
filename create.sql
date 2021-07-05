create database TME;
use TME;

create table user(
userid VARCHAR(100) NOT NULL,
userpw VARCHAR(100) NOT NULL,
username VARCHAR(100) NOT NULL,
gender VARCHAR(100) NOT NULL,
user_email VARCHAR(100) NOT NULL,
user_address VARCHAR(100) NOT NULL,
user_number VARCHAR(100) NOT NULL,
user_birth VARCHAR(100) NOT NULL,
point VARCHAR(100) NOT NULL,
chargecash VARCHAR(100) NOT NULL,
totalprice VARCHAR(100) NOT NULL
);

create table comment(
    userid VARCHAR(50) NOT NULL,
    review VARCHAR(100) NOT NULL,
    star VARCHAR(100) NOT NULL,
    S_code VARCHAR(100) NOT NULL,
    product VARCHAR(100) NOT NULL
);

create table history(
    C_code VARCHAR(50) NOT NULL,
    B_time VARCHAR(100) NOT NULL,
    R_time VARCHAR(100) NOT NULL,
    userid VARCHAR(100) NOT NULL,
    seller VARCHAR(100) NOT NULL,
    Get_num VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL
);