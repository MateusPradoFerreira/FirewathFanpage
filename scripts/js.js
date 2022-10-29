var troca = 0;

function muda (bb) {
    if (troca % 2 == 0) {
        document.getElementById('menuImg').src = 'imagens/menu2.png';
        document.getElementById(bb).style.marginLeft = '0';
        troca = troca + 1;
    } else {
        troca = troca + 1;
        document.getElementById('menuImg').src = 'imagens/menu1.png';
        document.getElementById(bb).style.marginLeft = '-100%';
    }
}
