function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano -  Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebemenino.png')
            } else if (idade < 25 ) {
                //Jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.png')
            }
        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade < 25 ) {
                //Jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultamulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosamulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ''
        var texto = document.createElement('p')
        texto.textContent = `Detectamos ${gênero} com idade ${idade} anos.`
        res.appendChild(img)
        res.appendChild(texto)
    }
}