drop database Projeto_Individual;
create database Projeto_Individual;

use Projeto_Individual;

create table Usuario (
  idusuario int primary key auto_increment,
  nickname varchar(10) not null,
  email varchar(150) not null,
  senha varchar(45) not null
);



select * from Usuario;