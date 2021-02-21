print("Here is a Binary Search Algorithm")

def pesquisa_binaria(lista, item):
    baixo = 0
    alto = len(lista) - 1

    while baixo <= alto:
        meio = int((baixo + alto) / 2)
        print ("O valor do meio é " + str(meio))
        chute = lista[meio]
        print ("O valor do chute é " + str(chute))
        if chute == item:
            return meio
        if chute > item:
            alto = meio - 1
        else:
            baixo = meio + 1
    return None

minha_lista = [1, 3, 5, 7, 9]

print (pesquisa_binaria(minha_lista, 9))
print (pesquisa_binaria(minha_lista, 7))