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

//numero de paragrafos da biografia de uma banda
function numParBio(b) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("biografia")[0];
    return banda.getElementsByTagName("par").length;
}

//paragrafo da biografia de uma banda
function getParBio(b,p) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("biografia")[0];
    return banda.getElementsByTagName("par")[p].childNodes[0].nodeValue;
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
function numAlbum(b) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("discografia")[0];
    return banda.getElementsByTagName("album").length;
}

//titulo de um album de uma banda
function getTituloAlbum(b, a) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("discografia")[0];
    return banda.getElementsByTagName("album")[a].getAttribute("titulo");
}

//ano de um album de uma banda
function getAnoAlbum(b, a) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("discografia")[0];
    return banda.getElementsByTagName("album")[a].getAttribute("ano");
}

//imagem de um album de uma banda
function getImgAlbum(b, a) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("discografia")[0];
    return "img/" + banda.getElementsByTagName("album")[a].getAttribute("imagem");
}

//link da Amazon de um album de uma banda
function getAmazonAlbum(b, a) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("discografia")[0];
    var album = banda.getElementsByTagName("album")[a].getElementsByTagName("links")[0];
    return album.getElementsByTagName("link")[0].getAttribute("url");
}

//link do iTunes de um album de uma banda
function getiTunesAlbum(b, a) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("discografia")[0];
    var album = banda.getElementsByTagName("album")[a].getElementsByTagName("links")[0];
    return album.getElementsByTagName("link")[1].getAttribute("url");
}


//logo da Amazon
function getAmazonLogo() {
    var banda = docXML.getElementsByTagName("banda")[0].getElementsByTagName("discografia")[0];
    var album = banda.getElementsByTagName("album")[0].getElementsByTagName("links")[0];
    return "img/" + album.getElementsByTagName("link")[0].getAttribute("logo");
}

//logo do iTunes
function getiTunesLogo() {
    var banda = docXML.getElementsByTagName("banda")[0].getElementsByTagName("discografia")[0];
    var album = banda.getElementsByTagName("album")[0].getElementsByTagName("links")[0];
    return "img/" + album.getElementsByTagName("link")[1].getAttribute("logo");
}

//FAIXAS
//numero de faixas de um album
function numFaixas(b, a) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("discografia")[0];
    var album = banda.getElementsByTagName("album")[a].getElementsByTagName("faixas")[0];
    return album.getElementsByTagName("faixa").length;
}

//titulo de uma faixa de um album
function getTituloFaixa(b, a, f) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("discografia")[0];
    var album = banda.getElementsByTagName("album")[a].getElementsByTagName("faixas")[0];
    return album.getElementsByTagName("faixa")[f].getAttribute("titulo");
}

//duracao (em segundos) de uma faixa de um album
function getDurFaixa(b, a, f) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("discografia")[0];
    var album = banda.getElementsByTagName("album")[a].getElementsByTagName("faixas")[0];
    return album.getElementsByTagName("faixa")[f].getAttribute("duracao");
}

//link do youtube de uma faixa de um album
function getYtFaixa(b, a, f) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("discografia")[0];
    var album = banda.getElementsByTagName("album")[a].getElementsByTagName("faixas")[0];
    var faixa = album.getElementsByTagName("faixa")[f].getElementsByTagName("links")[0];
    return faixa.getElementsByTagName("link")[1].getAttribute("url");
}

//link do spotify de uma faixa de um album
function getSpotFaixa(b, a, f) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("discografia")[0];
    var album = banda.getElementsByTagName("album")[a].getElementsByTagName("faixas")[0];
    var faixa = album.getElementsByTagName("faixa")[f].getElementsByTagName("links")[0];
    return faixa.getElementsByTagName("link")[0].getAttribute("url");
}

//logo do spotify
function getSpotLogo() {
    var banda = docXML.getElementsByTagName("banda")[0].getElementsByTagName("discografia")[0];
    var album = docXML.getElementsByTagName("album")[0].getElementsByTagName("faixas")[0];
    var faixa = album.getElementsByTagName("faixa")[0].getElementsByTagName("links")[0];
    return "img/" + faixa.getElementsByTagName("link")[0].getAttribute("logo");
}

//numero de generos de uma faixa de um album
function numGenFaixa(b, a, f) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("discografia")[0];
    var album = banda.getElementsByTagName("album")[a].getElementsByTagName("faixas")[0];
    var faixa = album.getElementsByTagName("faixa")[f].getElementsByTagName("generos")[0];
    return faixa.getElementsByTagName("genero").length;
}

//um dos generos de uma faixa de um album
function getGenFaixa(b, a, f, g) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("discografia")[0];
    var album = banda.getElementsByTagName("album")[a].getElementsByTagName("faixas")[0];
    var faixa = album.getElementsByTagName("faixa")[f].getElementsByTagName("generos")[0];
    return faixa.getElementsByTagName("genero")[g].childNodes[0].nodeValue;
}

//um dos generos de uma faixa de um album
function getGenFaixa(b, a, f, g) {
    var banda = docXML.getElementsByTagName("banda")[b].getElementsByTagName("discografia")[0];
    var album = banda.getElementsByTagName("album")[a].getElementsByTagName("faixas")[0];
    var faixa = album.getElementsByTagName("faixa")[f].getElementsByTagName("generos")[0];
    return faixa.getElementsByTagName("genero")[g].childNodes[0].nodeValue;
}