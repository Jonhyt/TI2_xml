var base;

function inic() {
    document.write('<div id="base"></div>');
    base = document.getElementById("base");
    base.style.backgroundColor = "#336466";
    base.style.padding = "15px";
    document.body.style.backgroundColor = "#383D3F";
    //apres();


    mainPage();
}

function apres() {
    base.style.width = "800";
    base.innerHTML='<table><tr><th id="titulo" colspan="2"></th></tr><tr><td id="texto"><td id="imagem"></tr><tr><td id="butoes" colspan="2"></td></tr></table>';
    var titulo = document.getElementById("titulo");
    titulo.style.color = "#E8D499";
    titulo.style.fontSize = "24px";
    titulo.style.fontFamily = "Verdana";
    titulo.style.textAlign = "left";
    titulo.innerHTML = getTitulo();
    var texto = document.getElementById("texto");
    texto.style.color = "#EAECED";
    texto.style.fontSize = "13px";
    texto.style.fontWeight = "bold";
    texto.style.fontFamily = "Verdana";
    texto.style.textAlign = "justified";
    for (var i = 0; i < numApresPar() ; i++)
        texto.innerHTML += '<p>' + getApresPar(i) + '</p>';
    var img = document.getElementById("imagem");
    img.innerHTML = '<img src="' + getImgAluno() + '" width="150"/>';
    var bt = document.getElementById("butoes");
    bt.style.textAlign = "right";
    bt.innerHTML = '<button onclick="mainPage()" >Next</button>';
}

function mainPage() {
    base.style.width = "900";
    base.innerHTML = '<table><tr>' +
        '<td id="banner"><img src="' + getImgBanda(0) + '" width="600" /></td>' +
        '<td id="albuns" rowspan="7"></td>' +
        '<tr><td id="bandaNome" width="600" style="color: #E8D499; font-family: Verdana; font-weight: bold; font-size:24">' + getNomeBanda(0) + '</td>' +
        '<tr><td id="bio" width="600" ></td></tr>' +
        '<tr><td id="membros" width="600" ></td></tr>' +
        '<tr><td id="links" width="600" ></td>' +
        '</tr></table>';

    //Bio
    var bio = document.getElementById("bio");
    bio.style.fontFamily = "Verdana";
    bio.style.fontSize = "12px";
    bio.style.color = "#EAECED";
    bio.style.padding="4px";
    for (var i = 0; i < numParBio(0) ; i++) {
        bio.innerHTML += '<p>' + getParBio(0, i) + '</p>';
    }
}

