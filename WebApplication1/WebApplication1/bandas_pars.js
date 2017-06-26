var docXML;
function inicXML(fichXML) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            docXML = xmlhttp.responseXML;
            inic();
        }
    }
    xmlhttp.open("GET", fichXML, true);
    xmlhttp.send();
}

//Extrai o titulo da app
function getTitulo() {
    return docXML.childNodes[0].titulo;
}

//Extrai o numero de paragrafos na apresentacao
function numApresPar() {
    var apres = docXML.getElementsByTagName("apres")[0];
    return apres.getElementsByTagName("par").length;
}

//Extrai o paragrafo de indice "p" da apresentacao
function getApresPar(p) {
    var apres = docXML.getElementsByTagName("apres")[0];
    return apres.getElementsByTagName("par")[p].nodeValue;
}
