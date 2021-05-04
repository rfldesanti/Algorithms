#Changes to be applied to this Python Binary Search Algorithm

#The progam must offer the possibility for the user
#to enter their own values (first and last), that will create a range
#where the target value must be found

#To create this kind of iteration with the user, we must, along ohter things:

# - Limit the operations to a unique data type and limited range of values;
# - Request to user a response, making him choice the values
# - that he wants to input in the search;
# - Verify if the values in fact can be used to make a binary search; actually,
# - we will use only INTEGERS to make the binary search; so, the program must be
# - able to prevent the user from including values that do not fit the given data type;

#All this changes requires that we learn how to:

# - Offer options to the user and learn how to deal with a valid and invalid options;
# - (I think that this point is very challenger, since we never did something like that
# - and we must found a GENERAL SOLUTION to this kind of problems)
# - Request inputs from the user;
# - Analyse this inputs to prevent the insertion if the values is not the kind
# - we are working with;
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