

let myButton_run = document.querySelector(".run");
let myButton_reset = document.querySelector(".reset");
let myText = document.getElementsByClassName('bloco_quadro');

myButton_run.onclick = function() {
        myText.textContent = 'Texto Aqui';
}

myButton_reset.onclick = function() {
        myText.textContent = '';
}

//Informações que preciso para compôr a página HTML
//      Array
//      Tamanho do array
//      Valor escolhido
//      Posição do valor
//      Número de tentativas para encontrar o valor