
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

select Usuario.idusuario, Usuario.nickname, Usuario.email, Quizz.pontuacao, Quizz.dtTentativa
	from Usuario
		join Quizz 
			on Usuario.idusuario = Quizz.fkUsuario;

select Usuario.nickname, Quizz.pontuacao, Quizz.dtTentativa
	from Usuario
		join Quizz 
			on Usuario.idusuario = Quizz.fkUsuario;

select Usuario.nickname, (SUM(Quizz.pontuacao) - MAX(Quizz.pontuacao)) AS pontuacao_menos_ja_feita
	from Usuario
		join Quizz 
			on Usuario.idusuario = Quizz.fkUsuario
				group by Usuario.idusuario, Usuario.nickname;

select Usuario.nickname, MAX(Quizz.pontuacao) AS maior_pontuacao
	from Usuario
		join Quizz 
			on Usuario.idusuario = Quizz.fkUsuario
				group by Usuario.idusuario, Usuario.nickname;

select avg(pontuacao) 
	as media_pontuacao
		from quizz;

select Usuario.nickname, 
	avg(Quizz.pontuacao) 
		as media_pontuacao
			from Usuario
				join Quizz on Usuario.idusuario = Quizz.fkusuario
					group by Usuario.idusuario, Usuario.nickname;

select Quizz.pontuacao, Quizz.dtTentativa
	from Usuario
		join Quizz 
			on Usuario.idusuario = Quizz.fkUsuario;
