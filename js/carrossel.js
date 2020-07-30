var images = [];
var carrossel;
var currentImage;
var maxImages;
var carrossel1;

function load() {
    var n = 1;
    for (var i = 0; i < 2; i++) {
        images[i] = new Image();
        images[i].src = "images/img" + n + ".png";
        n++;
    }
}

function loadImg(img) {
    carrossel.style.backgroundImage = "url(" + images[img].src + ")";
    if (img == 0) {
        carrossel1.style.backgroundImage = "url(" + images[img + 1].src + ")";
    } else {
        carrossel1.style.backgroundImage = "url(" + images[img - 1].src + ")";
    }
}

function start() {
    load()
    currentImage = 0;
    maxImages = images.length - 1;
    carrossel = document.getElementById("js-carrossel");
    carrossel1 = document.getElementById("js-carrossel1");
    loadImg(currentImage);

}

function exchange() {
    if (currentImage == 0) {
        currentImage = 1
    } else {
        currentImage = 0
    }
    loadImg(currentImage)
}


window.addEventListener("load", start)


/* Caso existisse mais imagens, seria preciso adicionar um parâmetro ,na function exchange, que seria passado pelos botões (indicando se é para passar a imagem ou voltar para a imagem anterior)além disso, seriam realizados os seguintes procedimentos:

    if (parâmetro == "voltar"){
    currentImage--;
    currentImage1--;
} else if(parâmetro == "passar") {
    currentImage++;
    currentImage1++;
}
if(currentImage > maxImages || currentImage1 > maxImages || currentImage1 < 0 || currentImage < 0){
    currentImage = 0;
    currentImage1 = 0;
}*/