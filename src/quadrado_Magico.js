// QUADRADO 
function matrizQuadradaMagica(matriz) {
    console.log("Quantidade de Parametros: " + arguments.length);
    //VERIFICANDO SE TODOS OS PARAMETROS SAO NUMEROS
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz[i].length; j++) {
            if (isNaN(matriz[i][j])) {
                console.log("O valor na posição [" + i + "][" + j + "] não é um número.");
                return false;
            }
        }
    }
    return true;
}

var matriz = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

if (matrizQuadradaMagica(matriz)) {
    console.log("É um quadrado mágico.");
} else {
    console.log("Não é um quadrado mágico.");
}

//TIRANDO A RAIZ QUADRADA DA QUANTIDADE DE TERMOS PARA VER O NUMERO DE LINHAS E COLUNAS
var calc = matriz.length;
//TRANSFORMANDO EM A RAIZ EM UM NUMERO INTEIRO PARA DEPOIS EFETUAR A COMPARACAO
var calc2 = Math.round(Math.sqrt(calc));
//FAZENDO A COMPARACCAO ENTRE A RAIZ E O NUMORO INTEIRO TIRADO A PARTIR DELA, SE FOREM DIFERENTES A RAIZ NAO É UM NUMERO INTEIRO, LOGO A MATRIZ NAO É QUADRADA
if (calc != calc2) {
    console.log("Raiz Quadrada do tamanho da matriz: " + calc + " Não é um número inteiro!! \n Logo matriz nem chega a ser quadrada.");
} else {
    console.log("Numero de linhas e colunas: " + calc);
}

//PEGAR OS PARAMETROS PASSADOS E TRANSFORMAR EM UMA MATRIZ QUADRADA
var arr = [];
var cont = 0;
var cont2 = 0;
var matriz = [];

//PEGAR OS PARAMETROS PASSADOS E TRANSFORMAR EM UMA MATRIZ QUADRADA
for (var i = arguments.length - 1; i >= 0; i--) {
    if (cont < calc) {
        arr[cont] = arguments[i];
        console.log("Argumentos" + i + ": " + arguments[i]);
    } 
    if (cont == calc - 1) {
        matriz[cont2] = arr.reverse(); 
        arr = [];
        cont2++; 
        cont = -1;
    } 
    cont++;
}

console.log("Matriz: " + matriz.toString()); // Exibir a matriz original
matriz = matriz.reverse(); // Inverter a matriz
console.log("Matriz: " + matriz.toString()); // Exibir a matriz invertida
console.log("Tamanho da matriz : " + matriz.length);

//*QUADRADO Matematicamente, um Quadrado Mágico é uma matriz quadrada (mesmo número de linhas e colunas)de ordem n (n linhas e n colunas) cujos elementos (números naturais) variam sucessivamente de  1 até n.n(nxn) que são arrumados de modo que a soma de cada linha, cada uma das duas diagonais principais ou de cada coluna seja sempre uma constante.
var m = matriz;
var somad = 0;
var somal = [];
var somac = [];
var retorno = 1;

//FAZENDO A SOMA DOS LADOS, COLUNAS E DIAGONAL PRINCIPAL 
for (var i = 0; i < m.length; i++) {
    somad += m[i][i];
    somal[i] = 0;
    somac[i] = 0;
    for (var j = 0; j < m[0].length; j++) {
        somal[i] += m[i][j];
        somac[i] += m[j][i];
        console.log("Matriz " + i + "-" + j + ": " + m[i][j]);
        console.log("Matriz " + j + "-" + i + ": " + m[j][i]);
    }

    // Mova a verificação aqui dentro
    if (somal[i] != somac[i]) {
        console.log("Não é quadrada magica");
        retorno = 0;
    }
}

if (retorno) {
    console.log("É um quadrado mágico.");
} else {
    console.log("Não é um quadrado mágico.");
}
