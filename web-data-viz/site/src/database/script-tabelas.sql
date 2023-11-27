
create database Projeto_Individual;

use Projeto_Individual;

create table Usuario (
  idusuario int primary key auto_increment,
  nickname varchar(10) not null,
  email varchar(150) not null,
  senha varchar(45) not null
);

create table Quizz (
	fkUsuario int primary key,
    pontuacao int not null,
    dtTentativa date not null
);

alter table Quizz 
	add foreign key (fkUsuario) 
		references Usuario (idUsuario);

select * from Usuario;

select * from Quizz;