

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
        var cont;

        while (low_item <= high_item) {
                middle = Math.floor((low_item + high_item)/2);
                guess = list[middle];
                if (guess == item) {
                        return middle;
                } else if (guess > item) {
                        high_item = middle - 1;
                } else {
                        low_item = middle + 1;
                }
        }
return null;
}

arr1 = [1,2,3,4,5,6,7,8,9,10];
len_arr1 = arr1.length;
item_arr = 4;

result = binary_search(arr1, item_arr);
console.log(result);

//Informações que preciso para compôr a página HTML
//      Array
//      Tamanho do array
//      Valor escolhido
//      Posição do valor
//      Número de tentativas para encontrar o valor