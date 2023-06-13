function abrirMenu() {
    var usuarioVar = sessionStorage.getItem("ID_USUARIO");
    nomeUsuario.innerHTML= `${sessionStorage.NOME_USUARIO}`
    
    if (menu.style.display == "none") {
        menu.style.display = "flex"
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