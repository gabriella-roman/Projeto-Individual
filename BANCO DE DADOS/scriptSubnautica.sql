CREATE DATABASE subnautica;
USE subnautica;
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


-- SELECTS
SELECT * FROM usuario;
SELECT * FROM pontuacao;
SELECT * FROM comentarios;
SELECT fkUsuario FROM pontuacao WHERE fkUsuario = 1;
SELECT count(pontuacao1), count(pontuacao2), count(pontuacao3), count(pontuacao4), count(pontuacao5) FROM pontuacao;
SELECT 
    nome, comentario, fkUsuario as idUsuario
FROM
    comentarios
        JOIN
    usuario ON comentarios.fkUsuario = usuario.id
    order by idPostagem desc;

SELECT
(SELECT count(pontuacao1) FROM pontuacao WHERE pontuacao1 = 1) AS Pergunta1,
(SELECT count(pontuacao2) FROM pontuacao WHERE pontuacao2 = 1) AS Pergunta2,
(SELECT count(pontuacao3) FROM pontuacao WHERE pontuacao3 = 1) AS Pergunta3,
(SELECT count(pontuacao4) FROM pontuacao WHERE pontuacao4 = 1) AS Pergunta4,
(SELECT count(pontuacao5) FROM pontuacao WHERE pontuacao5 = 1) AS Pergunta5;
