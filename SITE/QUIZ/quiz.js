const quiz = document.getElementById("quiz")



const tituloQuestionario = document.getElementById("tituloQuestionario")
const opcao1 = document.getElementById("opcao1")
const opcao2 = document.getElementById("opcao2")
const opcao3 = document.getElementById("opcao3")
const opcao4 = document.getElementById("opcao4")


var proxPergunta = false

let totalPerguntas = [
    pergunta1 = {
        tituloQuestionario: 'Que classe o Reaper pertence?',
        opcao1: 'Leviathan',
        opcao2: 'Peixe',
        opcao3: 'Quem é Reaper?',
        opcao4: 'Nenhuma das opções anteriores'
    },
    pergunta2 = {
        tituloQuestionario: 'Que empresa desenvolveu o jogo?',
        opcao1: 'Amazon',
        opcao2: 'Rockstar',
        opcao3: 'Unknow Worlds',
        opcao4: 'Riot Games'
    },
    pergunta3 = {
        tituloQuestionario: 'Quais são os nomes dos sobreviventes da Degasi?',
        opcao1: 'Roberta, Matheus e Poly',
        opcao2: 'Paul, Marguerit e Mark',
        opcao3: 'Marguerit, Ralph e Mark',
        opcao4: 'Nenhuma das opções anteriores'
    },
    pergunta4 = {
        tituloQuestionario: 'Qual o nome da nave na qual o protagonista estava?',
        opcao1: 'Aurora',
        opcao2: 'Seamoth',
        opcao3: 'Degasi',
        opcao4: 'Cyclops'
    },
    pergunta5 = {
        tituloQuestionario: 'Qual o maior leviathan do jogo que encontramos?',
        opcao1: 'Sea Dragon',
        opcao2: 'Ghost',
        opcao3: 'Reaper',
        opcao4: 'Sea Emperor'
    }
]

var posicaoPergunta = 0
function começar() {
    const botaoComeçar = document.getElementById("botaoComeçar")


    if (quiz.style.display == "none") {
        quiz.style.display = "flex"
    } else {
        quiz.style.display = "none"
    }
}
var mudarCor1 = document.getElementsByClassName("mudarCor1")[0];
var mudarCor2 = document.getElementsByClassName("mudarCor2")[0];
var mudarCor3 = document.getElementsByClassName("mudarCor3")[0];
var mudarCor4 = document.getElementsByClassName("mudarCor4")[0];

function proximaPergunta() {
    if (posicaoPergunta < totalPerguntas.length) {
        posicaoPergunta++
        tituloQuestionario.innerHTML = totalPerguntas[posicaoPergunta].tituloQuestionario
        opcao1.innerHTML = totalPerguntas[posicaoPergunta].opcao1
        opcao2.innerHTML = totalPerguntas[posicaoPergunta].opcao2
        opcao3.innerHTML = totalPerguntas[posicaoPergunta].opcao3
        opcao4.innerHTML = totalPerguntas[posicaoPergunta].opcao4
    }
    mudarCor1.style.backgroundColor = "#E48709";
    mudarCor2.style.backgroundColor = "#E48709";
    mudarCor3.style.backgroundColor = "#E48709";
    mudarCor4.style.backgroundColor = "#E48709";

}
/* MUDANDO COR PARA QUANDO SELECIONAR*/
function mudarCorOpcao1() {
    
    mudarCor1.style.backgroundColor = "red";

}

function mudarCorOpcao2() {

    mudarCor2.style.backgroundColor = "red";
}
function mudarCorOpcao3() {

    mudarCor3.style.backgroundColor = "red";
}
function mudarCorOpcao4() {

    mudarCor4.style.backgroundColor = "red";
}