//sort + Math.random():
/*
Esse código em JavaScript está usando a função sort para reorganizar um array de emojis de acordo com uma lógica de ordenação 
baseada em números aleatórios. Vamos explicar o código passo a passo:

1- let shuffleEmojis: Isso declara uma variável chamada shuffleEmojis usando a palavra-chave let. 
Essa variável será usada para armazenar o array de emojis reorganizado.

2- emojis.sort(() => (Math.random() > 0.5 ? 2 : -1)): Aqui está sendo chamado o método sort no array emojis. 
O método sort é usado para ordenar os elementos de um array.

  ° Math.random(): Gera um número decimal aleatório no intervalo [0, 1).
  ° Math.random() > 0.5: Retorna true com probabilidade de 50%, criando uma ordenação aleatória.
  ° (Math.random() > 0.5 ? 2 : -1): Se o número aleatório gerado for maior que 0.5, a expressão avalia para 2; 
    caso contrário, avalia para -1. Isso determina a direção da ordenação.

Portanto, a função de comparação fornecida ao sort retorna 2 ou -1 aleatoriamente, causando uma reorganização aleatória 
dos elementos no array.

3- shuffleEmojis: Após a ordenação, a variável shuffleEmojis contém o array original de emojis, 
mas com a ordem dos elementos reorganizada de forma aleatória com base na lógica descrita.
*/

// ? : ->
/*

A expressão Math.random() > 0.5 ? 2 : -1 faz uso do operador ternário (? :), que é uma forma concisa de escrever uma 
instrução if-else. Aqui está uma explicação mais detalhada:

Math.random() > 0.5: Esta parte verifica se o valor gerado por Math.random() é maior que 0.5. 
Essa expressão retorna true com uma probabilidade de 50% e false com uma probabilidade de 50%.

?: O operador ternário começa aqui. Ele funciona da seguinte maneira: se a condição (Math.random() > 0.5) for verdadeira, 
o valor antes do : (dois pontos) é usado; se for falsa, o valor depois do : é usado.

2: Se a condição for verdadeira (ou seja, Math.random() > 0.5 é true), o valor 2 é retornado.

:: Este é o separador entre as duas opções do operador ternário.

-1: Se a condição for falsa (ou seja, Math.random() > 0.5 é false), o valor -1 é retornado.

Equivalente a:
    if (Math.random() > 0.5) {
        () => 2;
    } else {
        () => -1;
    }
*/