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

minha_lista = [1, 3, 5, 7, 9]

print("The array is " + str(minha_lista))
print("The lenght o the array is " + str((len(lista)-1)))
print("The value searched is 9")

print (pesquisa_binaria(minha_lista, 9))
print (pesquisa_binaria(minha_lista, 7))