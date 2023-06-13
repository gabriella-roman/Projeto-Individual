create database subnautica;
use subnautica;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	email VARCHAR(45),
	senha VARCHAR(45)
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
	nome VARCHAR(45),
	comentario LONGTEXT,
	fkUsuario INT,
	constraint fkUsuarioPostagem FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

CREATE TABLE quiz (
fkUsuario INT,
	constraint fkUsuarioQuiz FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);

select * from usuario;
