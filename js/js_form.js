var titulo = document.getElementById("titulo")
var subtitulo = document.getElementById("subtitulo")
var paragrafo = document.getElementById("paragrafo")
var resposta_1 = document.getElementById("resposta_1")
var resposta_2 = document.getElementById("resposta_2")
var imagem = document.getElementById("img")

function escolha_positiva1()
{
    paragrafo.innerHTML= ""
    imagem.innerHTML = `<img src="img/background2.jpg">`
    resposta_1.onclick=escolha_positiva2();
    resposta_2.onclick=escolha_negativa2();
}
function escolha_positiva2()
