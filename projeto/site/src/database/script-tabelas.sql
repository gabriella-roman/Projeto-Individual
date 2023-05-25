CREATE DATABASE subnautica;

USE subnautica;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	email VARCHAR(45),
	senha VARCHAR(45)
);

CREATE TABLE pontuacao (
	idPontuação INT PRIMARY KEY AUTO_INCREMENT,
	pontuacao INT,
	fkUsuario INT,
	constraint fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(id)
);
