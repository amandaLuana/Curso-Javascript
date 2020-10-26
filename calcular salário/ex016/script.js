function contar() {
    var tn1 = document.getElementById('txtn1');
    var tn2 = document.getElementById('txtn2');
    var dias = document.getElementById('txtdias');
    var resultado = document.getElementById('res');

    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var dias = Number(dias.value);
    var mult = n1 * n2 * dias;
    resultado.innerHTML = `Total: <strong>${mult.toFixed(2)}</strong>`;

    /*while (n1 != n2) {
        resultado.innerHTML = (n1);
        n1++;
    }*/
    /*var result = n1 * n2 * dias;
    var r = Number(result.value);
    resultado.innerText(`o resultado do cálculo entre ${n1}, ${n2} e ${dias} é igual a ${r}`);*/
    // n1 * n2 * dias
}