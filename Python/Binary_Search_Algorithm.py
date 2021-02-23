print("Here is a Binary Search Algorithm")

def pesquisa_binaria(lista, item):
    baixo = 0
    alto = len(lista) - 1

    while baixo <= alto:
        meio = int((baixo + alto) / 2)
        chute = lista[meio]
        if chute == item:
            return meio
        if chute > item:
            alto = meio - 1
        else:
            baixo = meio + 1
    return None

def messages(arr, sv, pos):
    print("The array is " + str(arr))
    print("The lenght o the array is " + str(len(arr)))
    print("The value searched is " + str(sv))
    print("The position of the value is " + str(pos))

minha_lista = [1, 3, 5, 7, 9]
searched_value = 2
pos = pesquisa_binaria(minha_lista,searched_value)
messages(minha_lista, searched_value, pos)

searched_value = 3
pos = pesquisa_binaria(minha_lista,searched_value)
messages(minha_lista, searched_value, pos)