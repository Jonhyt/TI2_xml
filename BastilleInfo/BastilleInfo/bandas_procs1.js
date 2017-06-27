var base; //variavel que contem o div base
var selFaixa; //faixa selecionada

function inic() {
    document.write('<div id="base"></div>'); //cria o div base
    base = document.getElementById("base");
    base.style.backgroundColor = "#336466";
    base.style.padding = "15px";
    document.body.style.backgroundColor = "#383D3F";
    apres(); //chama a janela de apresentação
}

function apres() {
    base.style.width = "800";
    //cria a table base
    base.innerHTML='<table><tr><th id="titulo" colspan="2"></th></tr><tr><td id="texto"><td id="imagem"></tr><tr><td id="butoes" colspan="2"></td></tr></table>';
    //acrescenta o titulo do prorama
    var titulo = document.getElementById("titulo");
    titulo.style.color = "#E8D499";
    titulo.style.fontSize = "24px";
    titulo.style.fontFamily = "Verdana";
    titulo.style.textAlign = "left";
    titulo.innerHTML = getTitulo();
    //acrescenta o texto de apresentação
    var texto = document.getElementById("texto");
    texto.style.color = "#EAECED";
    texto.style.fontSize = "13px";
    texto.style.fontWeight = "bold";
    texto.style.fontFamily = "Verdana";
    texto.style.textAlign = "justified";
    for (var i = 0; i < numApresPar() ; i++)
        texto.innerHTML += '<p>' + getApresPar(i) + '</p>';
    //acrescenta a imagem do aluno
    var img = document.getElementById("imagem");
    img.innerHTML = '<img src="' + getImgAluno() + '" width="150"/>';
    //acresenta o botão de avanço para a página principal
    var bt = document.getElementById("butoes");
    bt.style.textAlign = "right";
    bt.innerHTML = '<button onclick="mainPage()" >Next</button>';
}

//função que controi a pagina principal
function mainPage() {
    base.style.width = "900";
    //cria a tabela base
    base.innerHTML = '<table><tr>' +
        '<td id="banner"><img src="' + getImgBanda(0) + '" width="600" /></td>' +
        '<td id="albuns" style="padding:5px;text-align:center" rowspan="5"></td>' +
        '<tr><td id="bandaNome" width="600" style="color: #E8D499; font-family: Verdana; font-weight: bold; font-size:24">' + getNomeBanda(0) + '</td>' +
        '<tr><td id="bio" width="600" ></td></tr>' +
        '<tr><td id="membros" width="600" ></td></tr>' +
        '<tr><td id="links" width="600" ></td></tr>' +
        '<tr><td colspan="2" style="text-align: right;"><button onclick="apres()">Back</button></td></tr>'+
        '</tr></table>';

    //Bio
    var bio = document.getElementById("bio");
    bio.style.fontFamily = "Verdana";
    bio.style.textAlign = "justify";
    bio.style.fontSize = "12px";
    bio.style.color = "#EAECED";
    for (var i = 0; i < numParBio(0) ; i++) {
        bio.innerHTML += '<p>' + getParBio(0, i) + '</p>';
    }

    //Membros
    var membros = document.getElementById("membros");
    membros.style.fontFamily = "Verdana";
    var memTab = '<table style="text-align: center;"><tr>';
    for (i = 0; i < numMembros(0) ; i++) {
        memTab += '<td><img width="' + (600 / numMembros(0)) + '" src="' + getImgMembro(0, i) + '"/></td>';
    }
    memTab+='</tr><tr>'
    for (i = 0; i < numMembros(0) ; i++) {
        memTab += '<td style="padding:3px;background-color:#E8D499;">' +
            '<p style="font-weight:bold;font-size:15px;color:#383D3F;">' + getNomeMembro(0, i) + '<br/>' +
            '<span style="font-weight:normal;font-size:12px;color:#383D3F;">(' + getDataEntradaMembro(0, i) + "-" + getDataSaidaMembro(0, i) + ')</span></p>'+
            '<p style="font-size:14px;color:#22373A;">';
        for (var j = 0; j < numFuncMembro(0, i) ; j++)
            memTab += (getFuncMembro(0, i, j).charAt(0).toUpperCase() + getFuncMembro(0, i, j).slice(1)) + '<br/>';
        memTab+= '</p></td>';
    }
    membros.innerHTML = memTab + '</tr></table>';

    //Links
    var links = document.getElementById("links");
    links.innerHTML += '<a style="margin:10px" href="' + getWikiBanda(0) + '"><img height="75" src="' + getWikiLogo() + '"/></a>' +
                    '<a style="margin:10px" href="' + getYtBanda(0) + '"><img height="75" src="' + getYtLogo() + '"/></a>' +
                    '<a style="margin:10px" href="' + getSiteBanda(0) + '"><img height="75" src="' + getSiteLogoBanda(0) + '"/></a>';
    
    //Albuns
    var albuns = document.getElementById("albuns");
    albuns.style.backgroundColor = "#E8D499";
    albuns.innerHTML += '<p style="text-align:center;font-weight:bold;font-size:24px;color:#22373A;">Albuns:</p>'
    for (i = 0; i < numAlbum(0) ; i++) {
        albuns.innerHTML += '<div style="background-color:#22373A;color:#EAECED;width:200px;border:2px solid #22373A;margin:5px;cursor:pointer"'+
                            'onmouseover="highlight(this)" onmouseout="unhighlight(this)" onclick="albumPage('+i+')"'+
                            '"><img width="200" src="' + getImgAlbum(0, i) + '"/></br>' +
                            '<span style="font-weight:bold;font-size:15px;">' + getTituloAlbum(0, i) + '</div>';
    }
}

//Destaca o album sobre o qual se tem o rato
function highlight(obj) {
        obj.style.textDecoration = "underline";
}
//Retira o destaque quando o rato sai de cima de um album
function unhighlight(obj) {
    obj.style.textDecoration = "none";
}

//cria a página respetiva ao album "i"
function albumPage(i) {
    selFaixa = -1;
    base.style.width = "1100px";
    //cria a tabela base
    base.innerHTML = '<table style="padding:10px;font-Family:Verdana">' +
                    '<tr><td width="200" rowspan="2"><img width="200" src="' + getImgAlbum(0, i) + '"/></td>' +
                        '<td style="font-weight:bold;font-size:30px;color:#E8D499;text-align:center" width="500" colspan="2">' + getTituloAlbum(0, i) + ' (' + getAnoAlbum(0, i) + ')</td>' +
                        '<td width="400" style="background-color:#E8D499" id="letra" rowspan="3"></td></tr>' +
                    '<tr><td width="200"><a href="' + getAmazonAlbum(0, i) + '"><img height="75" src="' + getAmazonLogo() + '"/></a>' +
                    '</td><td width="200"><a href="' + getiTunesAlbum(0, i) + '"><img height="75" src="' + getiTunesLogo() + '"/></a></td></tr>' +
                    '<tr><td id="faixas" colspan="3"></td></tr>' +
                    '<tr><td style="text-align:right" colspan="4"><button onclick="mainPage()">Back</button></td></tr>' +
                    '</table>';

    //Faixas
    var faixas = document.getElementById("faixas");
    faixas.style.fontFamily = "Verdana";
    var tabF = '<table width="700"><tr style="background-color:#22373A;color:#E8D499"><th >#</th><th>Title</th><th width="30">Duration</th></tr>';
    for (var j = 0; j < numFaixas(0, i) ; j++) {
        tabF += '<tr id="f'+j+'" style="background-color:' + ((j % 2 == 0) ? '#DDCA92' : '#C9B885') + ';cursor:pointer;color:#22373A" onmouseover="hlFaixa(this)" onmouseout="unhlFaixa(this)" onclick="infoFaixa('+i+","+j+')">' +
            '<td width="30">' + (j + 1) + '</td><td>' +
            getTituloFaixa(0, i, j) + '</td><td style="text-align:right">' +
            Math.floor(getDurFaixa(0, i, j) / 60) + ':' + ((getDurFaixa(0, i, j) % 60 >= 10) ? (getDurFaixa(0, i, j) % 60) : ('0' + (getDurFaixa(0, i, j) % 60))) + '</td></tr>';
    }
    faixas.innerHTML = tabF+'</table>';
}

//destaca a faixa sobre a qual se tem o rato
function hlFaixa(obj) {
    obj.style.backgroundColor = "#22373A";
    obj.style.color = "#EAECED";
}

//retira o destaque da faixa
function unhlFaixa(obj) {
    if((obj.getAttribute("id").slice(1))!=selFaixa){
        obj.style.backgroundColor = ((obj.getAttribute("id").slice(1) % 2 == 0) ? '#DDCA92' : '#C9B885');
        obj.style.color = "#22373A";
    }
}

//controi a zona dedicada à faixa com as informações da faixa "j" do album "i"
function infoFaixa(i, j) {
    var deSel = selFaixa;
    selFaixa = j;
    //retira o destaque da faixa previamente selecionada
    if (deSel > -1)
        unhlFaixa(document.getElementById("f" + deSel));
    var caixa = document.getElementById("letra");
    caixa.style.fontFamily = "Verdana";
    //acrescenta o titulo, a indicação dos géneros
    var txt = '<p style="color:#22373A;text-align:center;font-weight:bold;font-size:24px">' + getTituloFaixa(0, i, j) + '</p><p style="color:#383D3F;font-size:14px"><b>Genres: </b>';
    //acrescenta os géneros
    for (var k = 0; k < numGenFaixa(0, i, j) ; k++)
        txt += getGenFaixa(0, i, j, k) + ((k == numGenFaixa(0, i, j) - 1) ? '' : ', ');
    //acrescenta a indicação da letra
    txt += '</p><p style="margin-bottom:0px;color:#383D3F;font-size:14px"><b>Lyrics:</b></p><div style="height:350px;overflow:auto;color:#383D3F;font-size:14px">'
    //acrescenta a letra
    for (k = 0; k < numQuad(0, i, j) ; k++) {
        txt += '<p>';
        for (var l = 0; l < numVersos(0, i, j, k) ; l++)
            txt += getVerso(0, i, j, k, l) + '<br/>';
        txt += '</p>';
    }
    //acrescenta os links
    txt += '</div><div style="text-align:center;margin:5px">' +
        '<a href="' + getYtFaixa(0, i, j) + '"><img height="50" src="' + getYtLogo() + '"/></a>' +
        '<a href="' + getSpotFaixa(0, i, j) + '"><img height="50" src="' + getSpotLogo() + '"/></a></div>';
    caixa.innerHTML = txt;
    
}