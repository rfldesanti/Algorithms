/*      1 - Improvements to be made on short term:
                1.1 - Update the page when the button "Run test" is clicked;
                (update the page and make the test)


        2 - Improvements to be made on long term:
                2.1 - Put options to the user choose:
                        2.1.1 - the length of the array;
                        2.1.2 - the fill of the array;
                        2.1.3 - the value to be searched;
        2.2 - Create table for each test made; each time a test is run, create a table;
*/

let myButton_run = document.querySelector(".run");
let myButton_reset = document.querySelector(".reset");
let array = document.getElementById("array");
let array_len = document.getElementById("array_len");
let target_value = document.getElementById("target");
let index = document.getElementById("index");
let count = document.getElementById("attempts");

myButton_run.onclick = function() {
        arr1 = [1,2,3,4,5,6,7,8,9,10];
        len_arr1 = arr1.length;
        item_arr = 0;
        array.textContent = arr1;
        array_len.textContent = len_arr1;
        target_value.textContent = item_arr;
        results = binary_search(arr1, item_arr);
        index.textContent = results[0];
        count.textContent = results[1];
}

myButton_reset.onclick = function() {
        array.textContent = '';
        array_len.textContent = '';
        target_value.textContent = '';
        index.textContent = '';
        count.textContent = '';
}

function binary_search(list, item) {
        var low_item = 0;
        var high_item = list.length - 1;
        var cont = 0;
        var middle_cont = [];
        
        while (low_item <= high_item) {
                middle = Math.floor((low_item + high_item)/2);
                guess = list[middle];
                cont = cont + 1;
                console.log(cont);
                if (guess == item) {
                        return middle_cont = [middle, cont];
                } else if (guess > item) {
                        high_item = middle - 1;
                } else {
                        low_item = middle + 1;
                }
        }
return not_in_array = ["NOT IN ARRAY", cont];
}