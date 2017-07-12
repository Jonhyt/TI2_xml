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
    var titulo, texto, i, img, bt;
    base.style.width = "800";
    //cria a table base
    base.innerHTML='<table><tr><th id="titulo" colspan="2"></th></tr><tr><td id="texto"><td id="imagem"></tr><tr><td id="butoes" colspan="2"></td></tr></table>';
    //acrescenta o titulo do prorama
    titulo = document.getElementById("titulo");
    titulo.style.color = "#E8D499";
    titulo.style.fontSize = "24px";
    titulo.style.fontFamily = "Verdana";
    titulo.style.textAlign = "left";
    titulo.innerHTML = getTitulo();
    //acrescenta o texto de apresentação
    texto = document.getElementById("texto");
    texto.style.color = "#EAECED";
    texto.style.fontSize = "13px";
    texto.style.fontWeight = "bold";
    texto.style.fontFamily = "Verdana";
    texto.style.textAlign = "justified";
    for (i = 0; i < numApresPar() ; i++)
        texto.innerHTML += '<p>' + getApresPar(i) + '</p>';
    //acrescenta a imagem do aluno
    img = document.getElementById("imagem");
    img.innerHTML = '<img src="' + getImgAluno() + '" width="150"/>';
    //acresenta o botão de avanço para a página principal
    bt = document.getElementById("butoes");
    bt.style.textAlign = "right";
    bt.innerHTML = '<button onclick="mainPage()" >Next</button>';
}

function mainPage() {
    var i;
    var cod = '<table><tr style="color: #E8D499; font-family: Verdana; font-weight: bold; font-size:35; text-align:center"><th colspan="2">Choose a Band</th></tr>';
    for (i = 0; i < numBanda() ; i++) {
        cod += '<tr onmouseover="highlight(this)" onmouseout="unhighlight(this)" onclick="mainPageBanda('
            + i + ')" style="background-color:#E8D499;cursor:pointer"><td><img width="500" src="'
            + getImgBanda(i) + '" /></td><td width="300" style="color: #22373A; font-family: Verdana; font-weight: bold; font-size:35; text-align:center"> Go to<br/>'
            + getNomeBanda(i) + '</td></tr>';
    }
    base.innerHTML = cod + '<tr><td colspan="2" style="text-align:right"><button onclick="apres()">Back</button></td></tr></table>';
}

//função que controi a pagina principal
function mainPageBanda(banda) {
    var bio, membros, i, j, links, albuns,memTab;
    base.style.width = "900";
    //cria a tabela base
    base.innerHTML = '<table><tr>' +
        '<td id="banner"><img src="' + getImgBanda(banda) + '" width="600" /></td>' +
        '<td id="albuns" style="padding:5px;text-align:center;vertical-align:top" rowspan="5"></td>' +
        '<tr><td id="bandaNome" width="600" style="color: #E8D499; font-family: Verdana; font-weight: bold; font-size:24">' + getNomeBanda(banda) + '</td>' +
        '<tr><td id="bio" width="600" ></td></tr>' +
        '<tr><td id="membros" width="600" ></td></tr>' +
        '<tr><td id="links" width="600" ></td></tr>' +
        '<tr><td colspan="2" style="text-align: right;"><button onclick="mainPage()">Back</button></td></tr>' +
        '</tr></table>';

    //Bio
    bio = document.getElementById("bio");
    bio.style.fontFamily = "Verdana";
    bio.style.textAlign = "justify";
    bio.style.fontSize = "12px";
    bio.style.color = "#EAECED";
    for (i = 0; i < numParBio(banda) ; i++) {
        bio.innerHTML += '<p>' + getParBio(banda, i) + '</p>';
    }

    //Membros
    membros = document.getElementById("membros");
    membros.style.fontFamily = "Verdana";
    memTab = '<table style="text-align: center;"><tr>';
    for (i = 0; i < numMembros(banda) ; i++) {
        memTab += '<td><img width="' + (600 / numMembros(banda)) + '" src="' + getImgMembro(banda, i) + '"/></td>';
    }
    memTab+='</tr><tr>'
    for (i = 0; i < numMembros(banda) ; i++) {
        memTab += '<td style="padding:3px;background-color:#E8D499;vertical-align:top">' +
            '<p style="font-weight:bold;font-size:15px;color:#383D3F;">' + getNomeMembro(banda, i) + '<br/>' +
            '<span style="font-weight:normal;font-size:12px;color:#383D3F;">(' + getDataEntradaMembro(banda, i) + "-" + getDataSaidaMembro(banda, i) + ')</span></p>' +
            '<p style="font-size:14px;color:#22373A;">';
        for (j = 0; j < numFuncMembro(banda, i) ; j++)
            memTab += (getFuncMembro(banda, i, j).charAt(0).toUpperCase() + getFuncMembro(banda, i, j).slice(1)) + '<br/>';
        memTab+= '</p></td>';
    }
    membros.innerHTML = memTab + '</tr></table>';

    //Links
    links = document.getElementById("links");
    links.innerHTML += '<a style="margin:10px" href="' + getWikiBanda(banda) + '"><img height="75" src="' + getWikiLogo() + '"/></a>' +
                    '<a style="margin:10px" href="' + getYtBanda(banda) + '"><img height="75" src="' + getYtLogo() + '"/></a>' +
                    '<a style="margin:10px" href="' + getSiteBanda(banda) + '"><img height="75" src="' + getSiteLogoBanda(banda) + '"/></a>';
    
    //Albuns
    albuns = document.getElementById("albuns");
    albuns.style.backgroundColor = "#E8D499";
    albuns.innerHTML += '<p style="text-align:center;font-weight:bold;font-size:24px;color:#22373A;">Albuns:</p>';
    for (i = 0; i < numAlbum(banda) ; i++) {
        albuns.innerHTML += '<div style="background-color:#22373A;color:#EAECED;width:200px;border:2px solid #22373A;margin:5px;cursor:pointer"'+
                            'onmouseover="highlight(this)" onmouseout="unhighlight(this)" onclick="albumPage('+banda+','+i+')"'+
                            '"><img width="200" src="' + getImgAlbum(banda, i) + '"/></br>' +
                            '<span style="font-weight:bold;font-size:15px;">' + getTituloAlbum(banda, i) + '</div>';
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
function albumPage(banda, i) {
    var i, j, faixas,tabF;
    selFaixa = -1;
    base.style.width = "700px";
    //cria a tabela base
    base.innerHTML = '<table style="padding:10px;font-Family:Verdana">' +
                    '<tr><td width="200" rowspan="3"><img width="200" src="' + getImgAlbum(banda, i) + '"/></td>' +
                        '<td style="font-weight:bold;font-size:30px;color:#E8D499;text-align:center" width="500" colspan="2">' + getTituloAlbum(banda, i) + ' (' + getAnoAlbum(banda, i) + ')</td>' +
                        
                    '<tr><td width="200"><a href="' + getAmazonAlbum(banda, i) + '"><img height="75" src="' + getAmazonLogo() + '"/></a>' +
                    '</td><td width="200"><a href="' + getiTunesAlbum(banda, i) + '"><img height="75" src="' + getiTunesLogo() + '"/></a></td></tr>' +
                    '<tr><td height="50" width="390" style="background-color:#E8D499" id="letra" colspan="2"></td></tr>' +
                    '<tr><td id="faixas" colspan="3"></td></tr>' +
                    '<tr><td style="text-align:right" colspan="4"><button onclick="mainPage()">Back</button></td></tr>' +
                    '</table>';

    //Faixas
    faixas = document.getElementById("faixas");
    faixas.style.fontFamily = "Verdana";
    tabF = '<table width="700"><tr style="background-color:#22373A;color:#E8D499"><th >#</th><th>Title</th><th width="30">Duration</th></tr>';
    for (j = 0; j < numFaixas(banda, i) ; j++) {
        tabF += '<tr id="f'+j+'" style="background-color:' + ((j % 2 == 0) ? '#DDCA92' : '#C9B885') + ';cursor:pointer;color:#22373A" onmouseover="hlFaixa(this)" onmouseout="unhlFaixa(this)" onclick="infoFaixa('+banda+","+i+","+j+')">' +
            '<td width="30">' + (j + 1) + '</td><td>' +
            getTituloFaixa(banda, i, j) + '</td><td style="text-align:right">' +
            Math.floor(getDurFaixa(banda, i, j) / 60) + ':' + ((getDurFaixa(banda, i, j) % 60 >= 10) ? (getDurFaixa(banda, i, j) % 60) : ('0' + (getDurFaixa(banda, i, j) % 60))) + '</td></tr>';
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
function infoFaixa(banda, i, j) {
    var k,txt,caixa;
    var deSel = selFaixa;
    selFaixa = j;
    //retira o destaque da faixa previamente selecionada
    if (deSel > -1)
        unhlFaixa(document.getElementById("f" + deSel));
    caixa = document.getElementById("letra");
    caixa.style.fontFamily = "Verdana";
    //acrescenta o titulo, a indicação dos géneros
    txt = '<p style="color:#22373A;text-align:center;font-weight:bold;font-size:24px">' + getTituloFaixa(banda, i, j) + '</p><p style="color:#383D3F;font-size:14px;text-align:center;"><b>Genres: </b>';
    //acrescenta os géneros
    for (k = 0; k < numGenFaixa(banda, i, j) ; k++)
        txt += getGenFaixa(banda, i, j, k) + ((k == numGenFaixa(banda, i, j) - 1) ? '' : ', ');
    txt += '</p>';
    //acrescenta os links
    txt += '<div style="text-align:center;margin:5px">' +
        '<a href="' + getYtFaixa(banda, i, j) + '"><img height="50" src="' + getYtLogo() + '"/></a>' +
        '<a href="' + getSpotFaixa(banda, i, j) + '"><img height="50" src="' + getSpotLogo() + '"/></a></div>';
    caixa.innerHTML = txt;
    
}