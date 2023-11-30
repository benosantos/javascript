function carregar() {
    var msg = window.document.getElementById('msg');
    var fotos = window.document.getElementById('fotos');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora >= 0 && hora < 12){
        //BOM DIA!
        fotos.src = 'imagens/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        fotos.src = 'imagens/fototarde.png'
        document.body.style.background = '#b9846f'
    } else{
        //BOA NOITE!
        fotos.src = 'imagens/fotonoite.png'
        document.body.style.background = '#515154'
    }

}
