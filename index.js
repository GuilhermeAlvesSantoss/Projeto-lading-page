var setaDireita = window.document.getElementById("seta-Direita")
var Leronardo = window.document.getElementById("Leronardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-Esquerda")

function RolarParaDireita() {
    Leronardo.style = "display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"
}

function RolarParaEsquerda() {
    Leronardo.style = "display:flex;"
    Bruna.style = "display:none;"
    setaDireita.style = "display:flex; margin-top:50px;"
    setaEsquerda.style = "display:none";
}

