

let myButton_run = document.querySelector(".run");
let myButton_reset = document.querySelector(".reset");
let array = document.getElementById("array");
let array_len = document.getElementById("array_len");
let target_value = document.getElementById("target");
let index = document.getElementById("index");

myButton_run.onclick = function() {
        arr1 = [1,2,3,4,5,6,7,8,9,10,13,17,19,23,29];
        len_arr1 = arr1.length;
        item_arr = 10;
        array.textContent = arr1;
        array_len.textContent = len_arr1;
        target_value.textContent = item_arr;
        index.textContent = binary_search(arr1, item_arr);
}

myButton_reset.onclick = function() {
        array.textContent = '';
        array_len.textContent = '';
        target_value.textContent = '';
        index.textContent = '';
}

function binary_search(list, item) {
        var low_item = 0;
        var high_item = list.length - 1;

        while (low_item <= high_item) {
                middle = Math.floor((low_item + high_item)/2);
                guess = list[middle];
                console.log(guess);
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