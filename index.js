function contadorCaracteres() {
    let entradaTexto = document.getElementById('entrada').value;
    let contadorTexto = entradaTexto.length;
    document.getElementById('contador').innerText = "Caracteres: " + contadorTexto;
}

function limpiar(){
    document.getElementById('entrada').value = "";
    document.getElementById('contador').innerText = "Caracteres: 0";
}