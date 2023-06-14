    const usuario = document.getElementById("usuario")
    const usuarioCadastrado = document.getElementById("usuarioCadastrado")
    const menu = document.getElementById("menuFlutuante")
    const nomeUsuario = document.getElementById("nomeUsuario")
    const pontuacaoUsuario = document.getElementById("pontuacaoUsuario")
    const comentariosUsuario = document.getElementById("comentariosUsuario")

function abrirMenu() {
    var usuarioVar = sessionStorage.getItem("ID_USUARIO");
    nomeUsuario.innerHTML= `${sessionStorage.NOME_USUARIO}`
    
    if (menu.style.display == "none") {
        menu.style.display = "flex"
        exibirPontuacaoMenu()
    } else {
        menu.style.display = "none"
    }

    console.log(usuarioVar);

    fetch(`/usuarios/qtdPostagens/${usuarioVar}`).then(function (resposta) {


      if (resposta.ok) {
        console.log(resposta.json)
        resposta.json().then((json) => {
            const comentariosUsuario = document.getElementById("comentariosUsuario")
            comentariosUsuario.innerHTML = json[0].qtdComentarios
        });
      }
    });

    
  }

  function sair(){
    if (usuario.style.display == "none") {
        usuario.style.display = "flex"
        usuarioCadastrado.style.display = "none"
    }
      window.location = "index.html"
      sessionStorage.clear()
  
}

  var totalPosts = 0
  function totalPost(){
    fetch(`/usuarios/totalPostagens`).then(function (resposta) {


      if (resposta.ok) {
        console.log(resposta.json)
        resposta.json().then((json) => {
         totalPosts = json[0].totalComentarios
        });
      }
    });
  }

  function exibirPontuacaoMenu() {
    fetch("/usuarios/comecarOQuiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          ID_USUARIOServer: sessionStorage.ID_USUARIO
      })
    }) .then(function (resposta) {
      resposta.json().then (json => {
          if(json.length != 0) {
              pontosQuiz = json[0].pontuacao1 + json[0].pontuacao2 + json[0].pontuacao3 + json[0].pontuacao4 + json[0].pontuacao5
              pontuacaoUsuario.innerHTML = `${pontosQuiz}`
          } else {
            pontuacaoUsuario.innerHTML = `Faça o quiz para adquirir a pontuação!`
          }
      })
    });
  }