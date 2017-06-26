function inic() {
    document.body.innerHTML += '<h1>' + getTitulo() + '</h1>';
    for (var i = 0; i < numApresPar() ; i++)
        document.body.innerHTML += '<p>' + getApresPar(i) + '</p>';
}