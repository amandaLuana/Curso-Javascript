function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fano.value.length == 0 || fano.value > ano) {
        alert('Verifique os dados e tente novemente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')


        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 3) {
                //bebe
                img.setAttribute('src', 'bebehomem.jpg');
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', 'criancahomem.jpg');
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'jovemhomem.jpg');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultohomem.jpg');
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.jpg');
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                //bebe
                img.setAttribute('src', 'bebemulher.jpg');
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', 'criancamulher.jpg');
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'jovemmulher.jpg');
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultamulher.jpg');
            } else {
                //idoso
                img.setAttribute('src', 'idosomulher.jpg')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`;
        res.appendChild(img);
    }
}