function inic() {
    for (var i = 0; i < numMembros(0) ; i++) {
        document.body.innerHTML += '<h1>' + getNomeMembro(0, i) + '</h1>';
        document.body.innerHTML += '<img src="' + getImgMembro(0, i) + '"/>';
        document.body.innerHTML += '<p>Data de entrada: ' + getDataEntradaMembro(0, i) + '</p></br>';
        document.body.innerHTML += '<p>Data de saida: ' + getDataSaidaMembro(0, i) + '</p></br>';
        document.body.innerHTML += '<p>Funções: ';
        for (var j = 0; j < numFuncMembro(0, i) ; j++)
            document.body.innerHTML += getFuncMembro(0, i, j) + ", ";

    }
}

