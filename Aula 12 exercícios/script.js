function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var date = new Date();
    var hora = date.getHours();

    msg.innerHTML = `A hora agora é ${hora} horas`;

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg';
        document.body.style.background = '#415E65';
    }else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg';
        document.body.style.background = '#FDB14D';
    } else {
        img.src = 'noite.jpg';
        document.body.style.background = '#3A352C';
    }

    //manhã #415E65
    //tarde #FDB14D
    //noite #3A352C
}