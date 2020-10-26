function contar() {
    //pegandos os IDs
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let resultado = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        resultado.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados')
    } else {
        resultado.innerHTML = `Contando...<br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if (p <= 0) {
            alert('Inválido, considerando passo 1')
            p = 1
        }

        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem decrescente
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}