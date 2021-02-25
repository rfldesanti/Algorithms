let myButton_run = document.querySelector(".run");
let myButton_reset = document.querySelector(".reset");
let myText = document.getElementById("bloco_quadro");

/*DESENVOLVER O FUNCIONAMENTO DO BOTÃO!*/
function message() {
        if (myText.textContent != String) {
                myText.textContent = 'Texto aqui';
        } else {
                myText.textContent = null;
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