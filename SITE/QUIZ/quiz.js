const quiz = document.getElementById("quiz")
const graficoDeRespostas = document.getElementById("graficoDeRespostas")
const tituloQuestionario = document.getElementById("tituloQuestionario")
const opcao1 = document.getElementById("opcao1")
const opcao2 = document.getElementById("opcao2")
const opcao3 = document.getElementById("opcao3")
const opcao4 = document.getElementById("opcao4")
const botaoComeçar = document.getElementById("botaoComeçar")
const mudarFraseBotao = document.getElementById("mudarFraseBotao")

var mudarCor1 = document.getElementsByClassName("mudarCor1")[0];
var mudarCor2 = document.getElementsByClassName("mudarCor2")[0];
var mudarCor3 = document.getElementsByClassName("mudarCor3")[0];
var mudarCor4 = document.getElementsByClassName("mudarCor4")[0];
var pontuacao = 0
var contador = 0
var contador2 = 0
var contador3 = 0
var contador4 = 0
var respostaCerta = false
var pontosPergunta1 = 0
var pontosPergunta2 = 0
var pontosPergunta3 = 0
var pontosPergunta4 = 0
var pontosPergunta5 = 0

/* VETORES DAS PERGUNTAS*/
var totalPerguntas = [
    pergunta1 = {
        pergunta: 'Que classe o Reaper pertence?',
        opcao1: 'Leviathan',
        opcao2: 'Peixe',
        opcao3: 'Quem é Reaper?',
        opcao4: 'Nenhuma das opções anteriores',
        pontos: pontosPergunta1
    },
    pergunta2 = {
        pergunta: 'Que empresa desenvolveu o jogo?',
        opcao1: 'Amazon',
        opcao2: 'Rockstar',
        opcao3: 'Unknow Worlds',
        opcao4: 'Riot Games',
        pontos: pontosPergunta2
    },
    pergunta3 = {
        pergunta: 'Quais são os nomes dos sobreviventes da Degasi?',
        opcao1: 'Roberta, Matheus e Poly',
        opcao2: 'Paul, Marguerit e Mark',
        opcao3: 'Marguerit, Ralph e Mark',
        opcao4: 'Nenhuma das opções anteriores',
        pontos: pontosPergunta3
    },
    pergunta4 = {
        pergunta: 'Qual o nome da nave na qual o protagonista estava?',
        opcao1: 'Aurora',
        opcao2: 'Seamoth',
        opcao3: 'Degasi',
        opcao4: 'Cyclops',
        pontos: pontosPergunta4
    },
    pergunta5 = {
        pergunta: 'Qual o maior leviathan do jogo que encontramos?',
        opcao1: 'Sea Dragon',
        opcao2: 'Ghost',
        opcao3: 'Reaper',
        opcao4: 'Sea Emperor',
        pontos: pontosPergunta5
    }
]

var posicaoPergunta = 0

/* INICIO DO QUIZ 
*/
function começar() {
    var email = input_email_usuario.value;
    var temArroba = email.indexOf("@")
    var validacaoArroba = temArroba >= 0
    var validacaoFimDoEmail = (email.endsWith("sptech.school") || email.endsWith(".com") || email.endsWith(".com.br"))
    /*var validacaoSeEmailExisteNoBD = */

    if (quiz.style.display == "none" && validacaoFimDoEmail && validacaoFimDoEmail) {
        quiz.style.display = "flex"
    } else {
        quiz.style.display = "none"
        spanErro.innerHTML = `Email inválido, verifique antes de continuar!`
    }
}

/* MUDANDO COR PARA QUANDO SELECIONAR*/
/* SISTEMA DE PONTUAÇÃO */
function selecionarOpcao1() {

    if (contador == 0) {
        mudarCor1.style.backgroundColor = "red"
        mudarCor2.style.backgroundColor = "#E48709"
        contador2 = 0
        mudarCor3.style.backgroundColor = "#E48709"
        contador3 = 0
        mudarCor4.style.backgroundColor = "#E48709"
        contador4 = 0
        contador++
    } else {
        mudarCor1.style.backgroundColor = "#E48709"
        contador--
    }
    if (posicaoPergunta == 0 || posicaoPergunta == 3 ) {
        if(contador == 1){
            respostaCerta = true
        }
    } else {
            respostaCerta = false
    } 
    }


function selecionarOpcao2() {
    if (contador2 == 0) {
        mudarCor2.style.backgroundColor = "red"
        mudarCor1.style.backgroundColor = "#E48709"
        contador = 0
        mudarCor3.style.backgroundColor = "#E48709"
        contador3 = 0
        mudarCor4.style.backgroundColor = "#E48709"
        contador4 = 0
        contador2++
    } else {
        mudarCor2.style.backgroundColor = "#E48709"
        contador2--
    }
    respostaCerta = false
}

function selecionarOpcao3() {
    if (contador3 == 0) {
        mudarCor3.style.backgroundColor = "red"
        mudarCor1.style.backgroundColor = "#E48709"
        contador = 0
        mudarCor2.style.backgroundColor = "#E48709"
        contador2 = 0
        mudarCor4.style.backgroundColor = "#E48709"
        contador4 = 0
        contador3++
    } else {
        mudarCor3.style.backgroundColor = "#E48709"
        contador3--
    }

    if (posicaoPergunta == 1) {
        if(contador3 == 1){
            respostaCerta = true
        }
    } else {
            respostaCerta = false
    } 
}

function selecionarOpcao4() {
    if (contador4 == 0) {
        mudarCor4.style.backgroundColor = "red"
        mudarCor1.style.backgroundColor = "#E48709"
        contador = 0
        mudarCor2.style.backgroundColor = "#E48709"
        contador2 = 0
        mudarCor3.style.backgroundColor = "#E48709"
        contador3 = 0
        contador4++
    } else {
        mudarCor4.style.backgroundColor = "#E48709"
        contador4--
    }
    if (posicaoPergunta == 2 || posicaoPergunta == 4 ) {
        if(contador4 == 1){
            respostaCerta = true
        }
    } else {
            respostaCerta = false
    } 
}

/* VOLTAR PARA PÁGINA INICIAL*/

function voltarHome() {
    window.location.href = "../HOME/index.html";
}

/* FUNÇÃO PARA ATUALIZAR AS PERGUNTAS AO CLICAR NO BOTÃO*/
function proximaPergunta() {
    if (contador != 1 && contador2 != 1 && contador3 != 1 && contador4 != 1) {
        alert("Selecione uma alternativa!")
    } else {
        if (respostaCerta == true) {
            pontuacao++
            if (posicaoPergunta == 0) {
                totalPerguntas[0].pontos++
            } else if (posicaoPergunta == 1) {
                totalPerguntas[1].pontos++
            } else if (posicaoPergunta == 2) {
                totalPerguntas[2].pontos++
            } else if (posicaoPergunta == 3) {
                totalPerguntas[3].pontos++
            } else if (posicaoPergunta == 4) {
                totalPerguntas[4].pontos++
            }
        }
        respostaCerta = false
        contador = 0
        contador2 = 0
        contador3 = 0
        contador4 = 0

        if (posicaoPergunta < totalPerguntas.length - 1) {
            posicaoPergunta++
            tituloQuestionario.innerHTML = totalPerguntas[posicaoPergunta].pergunta
            opcao1.innerHTML = totalPerguntas[posicaoPergunta].opcao1
            opcao2.innerHTML = totalPerguntas[posicaoPergunta].opcao2
            opcao3.innerHTML = totalPerguntas[posicaoPergunta].opcao3
            opcao4.innerHTML = totalPerguntas[posicaoPergunta].opcao4
        }
        mudarCor1.style.backgroundColor = "#E48709";
        mudarCor2.style.backgroundColor = "#E48709";
        mudarCor3.style.backgroundColor = "#E48709";
        mudarCor4.style.backgroundColor = "#E48709";

        if (posicaoPergunta == 4) {
            mudarFraseBotao.innerHTML = `Finalizar Questionário`
            proxPergunta.style.backgroundColor = "blue";


            if (graficoDeRespostas.style.display == "none") {
                graficoDeRespostas.style.display = "flex"
            } else {
                graficoDeRespostas.style.display = "none"
            }
        }
    }
    
    vezesQueAcertou.innerHTML = `${pontuacao}`
}




