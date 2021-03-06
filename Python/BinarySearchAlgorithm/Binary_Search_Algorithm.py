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