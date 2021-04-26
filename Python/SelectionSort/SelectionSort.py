def buscaMenor(arr):
    menor = arr[0]
    menor_indice = 0
    for i in range(1, len(arr)):
        if arr[i] < menor:
            menor = arr[i]
            menor_indice = i
    return menor_indice

def ordenacaoPorSelecao(arr):
    novoArr = []
    print(arr)
    for i in range(len(arr)):
        menor = buscaMenor(arr)
        print(menor)
        novoArr.append(arr.pop(menor))
        print(arr)
        print(novoArr)
    return novoArr

print (ordenacaoPorSelecao([50, 13, 86, 220, 10]))