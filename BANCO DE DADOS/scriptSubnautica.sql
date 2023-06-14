create database subnautica;
use subnautica;
CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45)  NOT NULL,
	email VARCHAR(100) NOT NULL,
	senha VARCHAR(20) NOT NULL
);

CREATE TABLE pontuacao (
	idPontuação INT PRIMARY KEY AUTO_INCREMENT,
	pontuacao1 INT,
	pontuacao2 INT,
	pontuacao3 INT,
	pontuacao4 INT,
	pontuacao5 INT,
	fkUsuario INT,
	constraint fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

CREATE TABLE comentarios (
	idPostagem INT PRIMARY KEY AUTO_INCREMENT,
	comentario LONGTEXT NOT NULL,
	fkUsuario INT NOT NULL,
	constraint fkUsuarioPostagem FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

select * from usuario;
SELECT * FROM pontuacao WHERE fkUsuario = 2;
select * from pontuacao;
select fkUsuario from pontuacao where fkUsuario = 1;
select count(pontuacao1), count(pontuacao2), count(pontuacao3), count(pontuacao4), count(pontuacao5) from pontuacao;

SELECT 
    nome, comentario, fkUsuario as idUsuario
FROM
    comentarios
        JOIN
    usuario ON comentarios.fkUsuario = usuario.id
    order by idPostagem desc;



-- junte/selecione os selects(select) ----> (1,2,3 4,5);
select
(select count(pontuacao1) from pontuacao where pontuacao1 = 1) as Pergunta1,
(select count(pontuacao2) from pontuacao where pontuacao2 = 1) as Pergunta2,
(select count(pontuacao3) from pontuacao where pontuacao3 = 1) as Pergunta3,
(select count(pontuacao4) from pontuacao where pontuacao4 = 1) as Pergunta4,
(select count(pontuacao5) from pontuacao where pontuacao5 = 1) as Pergunta5;

SELECT * from comentarios;


select * from usuario;

delete from comentarios where idPostagem = 3;

insert into comentarios values 
(null, 'aaa', 2),
(null, 'aaa', 2),
(null, 'aaa', 2),
(null, 'aaa', 2),
(null, 'aaa', 2);