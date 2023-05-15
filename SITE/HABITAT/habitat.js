function ir_pagindex(){
    window.location.href = "../HOME/index.html";
}
function ir_paghistoria(){
    window.location.href = "../HISTÓRIA/historia.html";
}
function ir_pagleviathan(){
    window.location.href = "../LEVIATHANS/leviathans.html";
}

// testando carrosel
const proximo = document.getElementById("botaoPosterior")
const tituloBioma = document.getElementById("tituloBioma")
const imagemdoBioma = document.getElementById("imagemdoBioma")
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
        faixa1: '150 - 675 metros (Trincheira)',
        faixa2: '200 - 580 metros (Norte)',
        material: 'Xisto',
        lugar1: 'Grande Naufrágio (Trincheira)',
        lugar2: 'Lifepod destruído (Norte)',
        lugar3: 'Santuário de Algas de Sangue (Norte)'
    },
    slide2 = {
        titulo: 'BULB ZONE',
        faixa1: '140 - 480 metros',
        faixa2: '',
        material: 'Afloramento de arenito, Afloramento do Xisto',
        lugar1: 'Grande Naufrágio (2)',
        lugar2: 'Lifepod destruído (Norte)',
        lugar3: 'Gêiseres de Lava (3)' 
    },
    slide3 = {
        titulo: 'CRAG FIELD',
        faixa1: '125 - 460 metros',
        faixa2: '',
        material: 'Afloramento Calcário, Afloramento de arenito, Afloramento do Xisto',
        lugar1: 'Lifepod destruído',
        lugar2: '',
        lugar3: '' 
    },
    slide4 = {
        titulo: 'CRASH ZONE',
        faixa1: '0 - 370 metros',
        faixa2: '',
        material: 'Afloramento de Calcário, Afloramento de Arenito',
        lugar1: 'Aurora',
        lugar2: 'Lifepod destruído',
        lugar3: '' 
    },
    slide5 = {
        titulo: 'DUNES',
        faixa1: '65 - 400 metros',
        faixa2: '',
        material: 'Afloramento de Calcário, Afloramento de Arenito',
        lugar1: 'Cratera do meteoro',
        lugar2: 'Ponto de entrada Alien Vent',
        lugar3: 'Aberturas térmicas' 
    },
    slide6 = {
        titulo: 'GRAND REEF',
        faixa1: '150 - 480 metros',
        faixa2: '',
        material: 'Afloramento de Xisto, Afloramento do Arenito, Afloramento de Calcário',
        lugar1: 'Grande Naufrágio (2)',
        lugar2: 'Lifepod destruído (Norte)',
        lugar3: 'Gêiseres de Lava (3)' 
    },
    slide7 = {
        titulo: 'GRASSY PLATEAUS',
        faixa1: '50 - 170 metros',
        faixa2: '',
        material: 'Afloramento de Arenito, Afloramento de Calcário',
        lugar1: 'Grande Naufrágio',
        lugar2: 'Lifepod destruído',
        lugar3: '' 
    },
    slide8 = {
        titulo: 'KELP FOREST',
        faixa1: '0 - 160 metros',
        faixa2: '',
        material: 'Afloramento de Calcário, Afloramento de Arenito',
        lugar1: 'Grande Naufrágio',
        lugar2: 'Lifepod destruído',
        lugar3: '' 
    },
    slide9 = {
        titulo: 'MUSHROOM FOREST',
        faixa1: '75 - 250 metros (Noroeste)',
        faixa2: '125 - 200 metros (Nordeste)',
        material: 'Afloramento de Calcário, Afloramento de Arenito, Afloramento do Xisto, Pinha Roxa',
        lugar1: 'Mushroom Forest Arch Cache (Noroeste)',
        lugar2: 'Ponto de Entrada Alien Vent (Nordeste)',
        lugar3: 'Grande naufrágio (Noroeste)' 
    },
    slide10 = {
        titulo: 'LAVA ZONE',
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
        faixa1.innerHTML = totalSlides[posicaoSlide].faixa1
        faixa2.innerHTML = totalSlides[posicaoSlide].faixa2
        material.innerHTML = totalSlides[posicaoSlide].material
        lugar1.innerHTML = totalSlides[posicaoSlide].lugar1
        lugar2.innerHTML = totalSlides[posicaoSlide].lugar2
        lugar3.innerHTML = totalSlides[posicaoSlide].lugar3
    }
}

function anterior() {
    if (posicaoSlide <= totalSlides.length){
        posicaoSlide--
        tituloBioma.innerHTML = totalSlides[posicaoSlide].titulo
        faixa1.innerHTML = totalSlides[posicaoSlide].faixa1
        faixa2.innerHTML = totalSlides[posicaoSlide].faixa2
        material.innerHTML = totalSlides[posicaoSlide].material
        lugar1.innerHTML = totalSlides[posicaoSlide].lugar1
        lugar2.innerHTML = totalSlides[posicaoSlide].lugar2
        lugar3.innerHTML = totalSlides[posicaoSlide].lugar3
    }
}