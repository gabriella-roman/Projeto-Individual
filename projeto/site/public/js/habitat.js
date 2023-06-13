function ir_pagindex(){
    window.location.href = "index.html";
}
function ir_paghistoria(){
    window.location.href = "historia.html";
}
function ir_pagleviathan(){
    window.location.href = "leviathans.html";
}
function ir_paglogin() {
    window.location.href = "login.html";
}
function ir_pagcadastro() {
    window.location.href = "cadastro.html";
}

function ir_pagforum() {
    window.location.href = "forum.html";
}

    const menu = document.getElementById("menuFlutuante")
    const nomeUsuario = document.getElementById("nomeUsuario")
    const pontuacaoUsuario = document.getElementById("pontuacaoUsuario")
    const comentariosUsuario = document.getElementById("comentariosUsuario")

function abrirMenu(){
    nomeUsuario.innerHTML= `${sessionStorage.NOME_USUARIO}`
    nomeUsuario.innerHTML= `${sessionStorage.NOME_USUARIO}`
    if (menu.style.display == "none") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
}

// testando carrosel
const proximo = document.getElementById("botaoPosterior")
const tituloBioma = document.getElementById("tituloBioma")
const imagemBioma = document.getElementById("imagemBioma")
const faixa1 = document.getElementById("faixa1")
const faixa2 = document.getElementById("faixa2")
const material = document.getElementById("material")
const lugar1 = document.getElementById("lugar1")
const lugar2 = document.getElementById("lugar2")
const lugar3 = document.getElementById("lugar3")


var proximoSlide = false

var totalSlides = [
    slide1 = {
        titulo: 'BLOOD KELP ZONE',
        imagemdoBioma: 'url(../assets/imgs/BloodKELPZONE.webp)',
        faixa1: '150 - 675 metros (Trincheira)',
        faixa2: '200 - 580 metros (Norte)',
        material: 'Xisto',
        lugar1: 'Grande Naufrágio (Trincheira)',
        lugar2: 'Lifepod destruído (Norte)',
        lugar3: 'Santuário de Algas de Sangue (Norte)'
    },
    slide2 = {
        titulo: 'BULB ZONE',
        imagemdoBioma: 'url(../assets/imgs/BulbZoneTrue.webp)',
        faixa1: '140 - 480 metros',
        faixa2: '',
        material: 'Afloramento de arenito, Afloramento do Xisto',
        lugar1: 'Grande Naufrágio (2)',
        lugar2: 'Lifepod destruído (Norte)',
        lugar3: 'Gêiseres de Lava (3)' 
    },
    slide3 = {
        titulo: 'CRAG FIELD',
        imagemdoBioma: 'url(../assets/imgs/Crag_Field_Biome.webp)',
        faixa1: '125 - 460 metros',
        faixa2: '',
        material: 'Afloramento Calcário, Afloramento de arenito, Afloramento do Xisto',
        lugar1: 'Lifepod destruído',
        lugar2: '',
        lugar3: '' 
    },
    slide4 = {
        titulo: 'CRASH ZONE',
        imagemdoBioma: 'url(../assets/imgs/CrashZoneTrue.webp)',
        faixa1: '0 - 370 metros',
        faixa2: '',
        material: 'Afloramento de Calcário, Afloramento de Arenito',
        lugar1: 'Aurora',
        lugar2: 'Lifepod destruído',
        lugar3: '' 
    },
    slide5 = {
        titulo: 'DUNES',
        imagemdoBioma: 'url(../assets/imgs/Dunes_Biome.webp)',
        faixa1: '65 - 400 metros',
        faixa2: '',
        material: 'Afloramento de Calcário, Afloramento de Arenito',
        lugar1: 'Cratera do meteoro',
        lugar2: 'Ponto de entrada Alien Vent',
        lugar3: 'Aberturas térmicas' 
    },
    slide6 = {
        titulo: 'GRAND REEF',
        imagemdoBioma: 'url(../assets/imgs/baixados.jfif)',
        faixa1: '150 - 480 metros',
        faixa2: '',
        material: 'Afloramento de Xisto, Afloramento do Arenito, Afloramento de Calcário',
        lugar1: 'Grande Naufrágio (2)',
        lugar2: 'Lifepod destruído (Norte)',
        lugar3: 'Gêiseres de Lava (3)' 
    },
    slide7 = {
        titulo: 'GRASSY PLATEAUS',
        imagemdoBioma: 'url(../assets/imgs/Grassyplateaus1.webp)',
        faixa1: '50 - 170 metros',
        faixa2: '',
        material: 'Afloramento de Arenito, Afloramento de Calcário',
        lugar1: 'Grande Naufrágio',
        lugar2: 'Lifepod destruído',
        lugar3: '' 
    },
    slide8 = {
        titulo: 'KELP FOREST',
        imagemdoBioma: 'url(../assets/imgs/KelpForestTrue.webp)',
        faixa1: '0 - 160 metros',
        faixa2: '',
        material: 'Afloramento de Calcário, Afloramento de Arenito',
        lugar1: 'Grande Naufrágio',
        lugar2: 'Lifepod destruído',
        lugar3: '' 
    },
    slide9 = {
        titulo: 'MUSHROOM FOREST',
        imagemdoBioma: 'url(../assets/imgs/MushroomWestTrue.webp)',
        faixa1: '75 - 250 metros (Noroeste)',
        faixa2: '125 - 200 metros (Nordeste)',
        material: 'Afloramento de Calcário, Afloramento de Arenito, Afloramento do Xisto, Pinha Roxa',
        lugar1: 'Mushroom Forest Arch Cache (Noroeste)',
        lugar2: 'Ponto de Entrada Alien Vent (Nordeste)',
        lugar3: 'Grande naufrágio (Noroeste)' 
    },
    slide10 = {
        titulo: 'LAVA ZONE',
        imagemdoBioma: 'url(../assets/imgs/Hope_this_works.webp)',
        faixa1: '1300 - 1700 metros',
        faixa2: '',
        material: 'Cianita',
        lugar1: 'Usina Térmica Alienígena',
        lugar2: 'Instalação de Contenção Primária',
        lugar3: '' 
    }
]
var posicaoSlide = 0
function posterior() {

    if (posicaoSlide < totalSlides.length){
        posicaoSlide++
        tituloBioma.innerHTML = totalSlides[posicaoSlide].titulo
        imagemBioma.style.backgroundImage = totalSlides[posicaoSlide].imagemdoBioma
        faixa1.innerHTML = totalSlides[posicaoSlide].faixa1
        faixa2.innerHTML = totalSlides[posicaoSlide].faixa2
        material.innerHTML = totalSlides[posicaoSlide].material
        lugar1.innerHTML = totalSlides[posicaoSlide].lugar1
        lugar2.innerHTML = totalSlides[posicaoSlide].lugar2
        lugar3.innerHTML = totalSlides[posicaoSlide].lugar3
    }

    if(posicaoSlide == 9) {
        posicaoSlide = -1
    }
}

function anterior() {
    if (posicaoSlide <= totalSlides.length){
        posicaoSlide--
        tituloBioma.innerHTML = totalSlides[posicaoSlide].titulo
        imagemBioma.style.backgroundImage = totalSlides[posicaoSlide].imagemdoBioma
        faixa1.innerHTML = totalSlides[posicaoSlide].faixa1
        faixa2.innerHTML = totalSlides[posicaoSlide].faixa2
        material.innerHTML = totalSlides[posicaoSlide].material
        lugar1.innerHTML = totalSlides[posicaoSlide].lugar1
        lugar2.innerHTML = totalSlides[posicaoSlide].lugar2
        lugar3.innerHTML = totalSlides[posicaoSlide].lugar3
    }

    if(posicaoSlide == 0) {
        posicaoSlide = 10
    }
}

    const usuario = document.getElementById("usuario")
    const usuarioCadastrado = document.getElementById("usuarioCadastrado")
    function sair(){
        sessionStorage.clear()
        
        if (usuario.style.display == "none") {
            usuario.style.display = "flex"
            usuarioCadastrado.style.display = "none"
        }

    }