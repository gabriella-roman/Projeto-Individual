// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    const usuarioCadastrado = document.getElementById("usuarioCadastrado")
    const usuario = document.getElementById("usuario")

    if (email != null && nome != null) {
       usuarioCadastrado.style.display = "flex"
       usuario.style.display = "none"
        
    } else {
        usuarioCadastrado.style.display = "none"
       usuario.style.display = "flex"
    }
}



// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}




