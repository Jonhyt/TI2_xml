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

//APRESENTACAO
//Extrai o titulo da app
function getTitulo() {
    return docXML.childNodes[0].getAttribute("titulo");
}

//Extrai o numero de aluno do desenvolvedor
function getNumAluno() {
    return docXML.getElementsByTagName("apres")[0].getAttribute("numAluno");
}

//Extrai o nome do desenvolvedor
function getNomeAluno() {
    return docXML.getElementsByTagName("apres")[0].getAttribute("nomeAluno");
}

//Extrai o caminho para a foto do desenvolvedor
function getImgAluno() {
    return "img/"+docXML.getElementsByTagName("apres")[0].getAttribute("foto");
}

//Extrai o numero de paragrafos na apresentacao
function numApresPar() {
    var apres = docXML.getElementsByTagName("apres")[0];
    return apres.getElementsByTagName("par").length;
}

//Extrai o paragrafo de indice "p" da apresentacao
function getApresPar(p) {
    var apres = docXML.getElementsByTagName("apres")[0];
    return apres.getElementsByTagName("par")[p].childNodes[0].nodeValue;
}

//BANDA
//Extrai o numero de bandas
function numBanda() {
    return docXML.getElementsByTagName("banda").length;
}

//Extrai o nome da banda de indice "b"
function getNomeBanda(b) {
    return docXML.getElementsByTagName("banda")[b].getAttribute("nome");
}

//Extrai o caminho para a imagem da banda de indice "b"
function getImgBanda(b) {
    return "img/"+docXML.getElementsByTagName("banda")[b].getAttribute("imagem");
}

//Extrai o url da wikipedia referente a banda
function getWikiBanda(b) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("links")[0];
    return banda.getElementsByTagName("link")[0].getAttribute("url");
}

//Extrai o logo da wikipedia
function getWikiLogo() {
    var banda = docXML.getElementsByTagName("banda")[0].getElementsByTagName("links")[0];
    return "img/" + banda.getElementsByTagName("link")[0].getAttribute("logo");
}

//Extrai o url do youtube referente a banda
function getYtBanda(b) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("links")[0];
    return banda.getElementsByTagName("link")[1].getAttribute("url");
}

//Extrai o url do youtube referente a banda
function getYtLogo() {
    var banda = docXML.getElementsByTagName("banda")[0].getElementsByTagName("links")[0];
    return "img/" + banda.getElementsByTagName("link")[1].getAttribute("logo");
}

//Extrai o url do site oficial referente a banda
function getSiteBanda(b) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("links")[0];
    return banda.getElementsByTagName("link")[2].getAttribute("url");
}

//Extrai o nome do site oficial referente a banda
function getSiteNomeBanda(b) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("links")[0];
    return banda.getElementsByTagName("link")[2].getAttribute("site");
}

//Extrai o logo do site oficial referente a banda
function getSiteLogoBanda(b) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("links")[0];
    return "img/" + banda.getElementsByTagName("link")[2].getAttribute("logo");
}

//MEMBROS
//numero de membros da banda
function numMembros(b) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("membros")[0];
    return banda.getElementsByTagName("membro").length;
}

//nome de um dos membros da banda
function getNomeMembro(b, m) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("membros")[0];
    return banda.getElementsByTagName("membro")[m].getAttribute("nome");
}

//data de entrada de um dos membros da banda
function getDataEntradaMembro(b, m) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("membros")[0];
    return banda.getElementsByTagName("membro")[m].getAttribute("dataEntrada");
}

//data de saida de um dos membros da banda
function getDataSaidaMembro(b, m) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("membros")[0];
    return banda.getElementsByTagName("membro")[m].getAttribute("dataSaida");
}

//foto de um dos membros da banda
function getImgMembro(b, m) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("membros")[0];
    return "img/" + banda.getElementsByTagName("membro")[m].getAttribute("foto");
}

//numero de funcoes de um dos membros da banda
function numFuncMembro(b, m) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("membros")[0];
    var membro = banda.getElementsByTagName("membro")[m];
    return membro.getElementsByTagName("funcao").length;
}

//uma das funcoes de um dos membros da banda
function getFuncMembro(b, m, f) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("membros")[0];
    var membro = banda.getElementsByTagName("membro")[m];
    return membro.getElementsByTagName("funcao")[f].childNodes[0].nodeValue;
}

//ALBUNS
//numero de albuns de uma banda