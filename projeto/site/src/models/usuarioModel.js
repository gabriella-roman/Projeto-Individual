var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// exibir os dados no gráfico
function exibirDados() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    select
    (select count(pontuacao1) from pontuacao where pontuacao1 = 1) as Pergunta1,
    (select count(pontuacao2) from pontuacao where pontuacao2 = 1) as Pergunta2,
    (select count(pontuacao3) from pontuacao where pontuacao3 = 1) as Pergunta3,
    (select count(pontuacao4) from pontuacao where pontuacao4 = 1) as Pergunta4,
    (select count(pontuacao5) from pontuacao where pontuacao5 = 1) as Pergunta5;;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function inserirPontuacao(pontuacao1, pontuacao2, pontuacao3, pontuacao4, pontuacao5, ID_USUARIO) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", pontuacao1, pontuacao2, pontuacao3, pontuacao4, pontuacao5, ID_USUARIO);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO pontuacao (pontuacao1, pontuacao2, pontuacao3, pontuacao4, pontuacao5, fkUsuario) VALUES (${pontuacao1}, ${pontuacao2}, ${pontuacao3} , ${pontuacao4}, ${pontuacao5}, ${ID_USUARIO});
    `;

    var instrucao = `
        INSERT INTO quiz (fkUsuario) VALUES (${ID_USUARIO});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function postar(comentario, idUsuario) {
    console.log("ACESSEI O POSTAR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", comentario, idUsuario);
    
    
    var instrucao = `
        INSERT INTO comentarios (comentario, fkUsuario) VALUES ('${comentario}','${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function posts() {
    var instrucao = `
    SELECT 
    nome, comentario, fkUsuario as idUsuario, idPostagem
FROM
    comentarios
        JOIN
    usuario ON comentarios.fkUsuario = usuario.id
    ORDER BY idPostagem DESC;
    `

    return database.executar(instrucao);
}

function qtdPostagens(usuario) {
   
     var instrucao = `
     SELECT count(fkUsuario) as qtdComentarios from comentarios where fkUsuario = '${usuario}';
     `;

     console.log("Executando a instrução SQL: \n" + instrucao);
     return database.executar(instrucao);
 }

 function totalPost() {
   
    var instrucao = `
    SELECT count(idPostagem) as totalComentarios from comentarios;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


 function começarOQuiz(idUsuario) {
    var instrucao = `
    SELECT * FROM quiz WHERE fkUsuario = ${idUsuario};
    `

    return database.executar(instrucao);
}

function deletePost(idPost) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function delete()");
    var instrucao = `
        DELETE FROM comentarios WHERE idPostagem = ${idPost};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    inserirPontuacao,
    exibirDados,
    postar,
    posts,
    qtdPostagens,
    começarOQuiz,
    deletePost,
    totalPost
};