/*      2 - Improvements to be made on long term:
                2.1 - Put options to the user choose:
                        2.1.1 - the length of the array;
                        2.1.2 - the fill of the array;
                        2.1.3 - the value to be searched;
        2.2 - Create table for each test made; each time a test is run, create a table;
*/

/* 29/04/2021      
        The ideas above surely can be done, but I had other ideas to use in
        the Binary Search Algorithm's page.
        My ideia is to put two boxes in the page and ask the user to inform
        two values: one is going to be the MINOR value - the first value of the range;
        the other is the MAJOR value - the last value of the range; then, another
        box requesting the size of the distance between the values that 
        compose the range. With this three values, we can create a range where
        we are going to select a number to be our target value;
        To select a target value, my ideia is to create some kind of "slot machine system",
        in which the value is choosed by a user's event (a mouse click or button pressing)
        while random numbers that are part of the range are running in the screen.
        This numbers are showm IN THE SAME FILED, exactly like the slot machines, with
        a "reel" spinning rapidly a bunch of numbers.
        To achieve this kind of logic and layout, we are going to need:

                - to inform the user that the program creates a range
                  based on the values that he is going to inform;
                - two boxes to receive values;
   
*/

var myButton_run = document.querySelector(".run");
var myButton_reset = document.querySelector(".reset");
var array = document.getElementById("array");
var array_len = document.getElementById("array_len");
var target_value = document.getElementById("target");
var index = document.getElementById("index");
var count = document.getElementById("attempts");

myButton_run.onclick = function() {
        arr1 = [55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80];
        len_arr1 = arr1.length;
        item_arr = 80;
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