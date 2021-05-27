
function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function jogador1() {
    var cartas1 = document.getElementById("cartas1");
    var valor = valorAleatorio();
    $(cartas1).attr("src", '/images/' + valor + '.png'); 
    Pontos1(valor)
}

function jogador2() {
    var cartas2 = document.getElementById("cartas2");
    var valor = valorAleatorio();
    $(cartas2).attr("src", '/images/' + valor + '.png');
    Pontos2(valor)
}

function reiniciar() {
    window.location.reload(true)
}

function parar1() {
    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_parar1 = document.getElementById("btn_parar_1");
    //var btn_jogador2 = document.getElementById("btn_jogador_2");
    //var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');
    //$(btn_jogador2).removeAttr('disabled');
    //$(btn_parar2).removeAttr('disabled');
    Resultado()
}

function iniciar() {
    var btn_iniciar = document.getElementById("btn_iniciar");
    var cartas1 = document.getElementById("cartas1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar2 = document.getElementById("btn_parar_2");
    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var valor = valorAleatorio();
    $(cartas1).attr("src", '/images/' + valor + '.png');
    Pontos1(valor)

    var cartas2 = document.getElementById("cartas2");
    var valor = valorAleatorio();
    $(cartas2).attr("src", '/images/' + valor + '.png');
    Pontos2(valor)

    $(btn_iniciar).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');
    $(btn_jogador1).removeAttr('disabled');
    $(btn_parar1).removeAttr('disabled');
}

function parar2() {
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');
    Resultado();
}

function Pontos1(ponto) {
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar2 = document.getElementById("btn_parar_2");
    if (ponto > 10 ) {
        ponto = 10
    }
    var jogador1 = document.getElementById("jogador1");
    var valor = parseInt($(jogador1)[0].innerText) + parseInt(ponto);
    $(jogador1)[0].innerText = valor;
    if (valor == 21) {
        parar1();
    }
    if (valor > 21) {
        parar1();
        $(Resultado2)[0].style.visibility = "visible";
        $(btn_jogador2).attr('disabled', 'disabled');
        $(btn_parar2).attr('disabled', 'disabled');
    }
}

function Pontos2(ponto) {
    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_parar1 = document.getElementById("btn_parar_1");
    if (ponto > 10) {
        ponto = 10
    }
    var jogador2 = document.getElementById("jogador2");
    var valor = parseInt($(jogador2)[0].innerText) + parseInt(ponto);
    $(jogador2)[0].innerText = valor;
    if (valor == 21) {
        parar2();
    }
    if (valor > 21) {
        parar2();
        $(Resultado1)[0].style.visibility = "visible";
        $(btn_jogador1).attr('disabled', 'disabled');
        $(btn_parar1).attr('disabled', 'disabled');
    }
}

function Resultado() {
    var jogador1 = document.getElementById("btn_jogador_1");
    var jogador2 = document.getElementById("btn_jogador_2");
    var valor1 = document.getElementById("jogador1");
    var valor2 = document.getElementById("jogador2");
    var Resultado1 = document.getElementById("Resultado1");
    var Resultado2 = document.getElementById("Resultado2");
    var Empate = document.getElementById("Empate");

    if ($(jogador1)[0].disabled == true && $(jogador2)[0].disabled == true) {
        if (parseInt($(valor2)[0].innerText) == 21 && parseInt($(valor1)[0].innerText) == 21) {
            $(Empate)[0].style.visibility = "visible";
            return;
        }
        if (parseInt($(valor2)[0].innerText) > parseInt($(valor1)[0].innerText) ) {
            if (parseInt($(valor2)[0].innerText) <= 21) {
                $(Resultado2)[0].style.visibility = "visible";
            }
            else {
                $(Resultado1)[0].style.visibility = "visible";
            }
        }
        else {
            if (parseInt($(valor1)[0].innerText) <= 21) {
                $(Resultado1)[0].style.visibility = "visible";
            }
            else {
                $(Resultado2)[0].style.visibility = "visible";
            }
        }
    }
}