function contar(){
    var ini = Number(document.body.querySelector('#txti').value)
    var passo = Number(document.body.querySelector('#txtp').value)
    var fim = Number(document.body.querySelector('#txtf').value)
    im2 = fim + 1
    var contagem = document.body.querySelector('#res')
    if(ini == 0 || passo == 0 || fim == 0 ){
    window.alert('Erro! Tente Novamente!')
    }else if (fim > ini){
        while(ini < fim){
            contagem.innerHTML += `👉${ini} `
            ini += passo
    }contagem.innerHTML += `🏁 `
    
    }else if (ini> fim){
        while(ini > fim){
            contagem.innerHTML += `👉${ini} `
            ini -= passo 
    }contagem.innerHTML += `🏁 `
   
    }

}