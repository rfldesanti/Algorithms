let myButton_run = document.querySelector(".run");
let myButton_reset = document.querySelector(".reset");
let myText = document.getElementById("bloco_quadro");

function message() {
        if (myText.textContent == '') {
                myText.textContent = 'Texto Aqui';
        } else {
                myText.textContent = '';
        }
}

myButton_run.onclick = function() {
        message();
}

myButton_reset.onclick = function() {
        message();
}

//Informações que preciso para compôr a página HTML
//      Array
//      Tamanho do array
//      Valor escolhido
//      Posição do valor
//      Número de tentativas para encontrar o valor