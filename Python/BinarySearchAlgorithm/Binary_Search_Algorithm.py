#Changes to be applied to this Python Binary Search Algorithm

    # My ideia is to put two boxes in the page and ask the user to inform
    # two values: one is going to be the MINOR value - the first value of the range;
    # the other is the MAJOR value - the last value of the range; then, another
    # box requesting the size of the distance between the values that 
    # compose the range. With this three values, we can create a range where
    # we are going to select a number to be our target value;
    # To select a target value, my ideia is to create some kind of "slot machine system",
    # in which the value is choosed by a user's event (a mouse click or button pressing)
    # while random numbers that are part of the range are running in the screen.
    # This numbers are showm IN THE SAME FIELD, exactly like the slot machines, with
    # a "reel" spinningshowing rapidly a bunch of numbers.

    # To achieve this kind of logic and layout, we are going to need:
    # - to inform the user that the program creates a range
    #based on the values that he is going to inform;

#The progam must offer the possibility for the user
#to enter their own values (first and last), that it will create a range
#where the target value must be found

#To create this kind of iteration with the user, we must, along ohter things:

# - Limit the operations to a unique data type and limited range of values;
# - Request a responde from the user, making him choice the values
# - that he wants to input in the search;
# - Verify if the values in fact can be used to make a binary search; actually,
# - we will use only INTEGERS to make the binary search; so, the program must be
# - able to prevent the user from including values that do not fit the given data type;

#All this changes requires that we learn how to:

# - Request inputs from the user;
# - Deal with valid and invalid options (the user inputs);
# - (I think that this point is very challenger, since we never did something like that
# - and we must found a GENERAL SOLUTION to this kind of problems);
# - Create a "slot machine", that it will show the values in a random sequence
# - and in a faster way;
# - Make the "slot machine" stop when the user press any key;

print("Here is a Binary Search Algorithm")

def pesquisa_binaria(lista, item):
    baixo = 0
    alto = len(lista) - 1
    count = 0

    while baixo <= alto:
        count = count + 1
        meio = int((baixo + alto) / 2)
        pos_count = [meio, count]
        chute = lista[meio]
        if chute == item:
            return pos_count
        if chute > item:
            alto = meio - 1
        else:
            baixo = meio + 1
    return [None, count]

def messages(arr, sv, arr2):
    print("Array: " + str(arr))
    print("Length: " + str(len(arr)))
    print("Value searched: " + str(sv))
    print("Index: " + str(arr2[0]))
    print("Attempts: " + str(arr2[1]))

minha_lista = [10, 30, 50, 70, 90, 100, 101, 102, 103, 104]
searched_value = 100
pos = pesquisa_binaria(minha_lista,searched_value)
messages(minha_lista, searched_value, pos)

searched_value = 109
pos = pesquisa_binaria(minha_lista,searched_value)
messages(minha_lista, searched_value, pos)