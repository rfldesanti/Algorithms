

let myButton_run = document.querySelector(".run");
let myButton_reset = document.querySelector(".reset");
let myText = document.getElementsByClassName('bloco_quadro');

myButton_run.onclick = function() {
        myText[0].textContent = "Texto Aqui";
        myText[1].textContent = "Texto Aqui";
}

myButton_reset.onclick = function() {
        myText[0].textContent = '';
        myText[1].textContent = '';
}

function binary_search(list, item) {
        var low_item = 0;
        var high_item = list.length - 1;
        var conj = [high_item, item];
        alert(conj);
}

arr1 = [0,1,2,3,4];
item1 = 5;
binary_search(arr1, item1);

//Informações que preciso para compôr a página HTML
//      Array
//      Tamanho do array
//      Valor escolhido
//      Posição do valor
//      Número de tentativas para encontrar o valor