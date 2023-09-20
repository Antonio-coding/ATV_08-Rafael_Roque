// Quadrado Mágico simplificado
function verificaQuadradoMagico(matriz) {
    const n = matriz.length;
    let somaPrincipal = 0;
    let somaSecundaria = 0;

    // Verificar se a matriz é quadrada
    for (let i = 0; i < n; i++) {
        if (matriz[i].length !== n) {
            return false;
        }
    }

    // Calcular a soma da diagonal principal e da diagonal secundária
    for (let i = 0; i < n; i++) {
        somaPrincipal += matriz[i][i];
        somaSecundaria += matriz[i][n - 1 - i];
    }

    // Verificar se a soma das diagonais é igual
    if (somaPrincipal !== somaSecundaria) {
        return false;
    }

    // Verificar as somas das linhas e colunas
    for (let i = 0; i < n; i++) {
        let somaLinha = 0;
        let somaColuna = 0;
        for (let j = 0; j < n; j++) {
            somaLinha += matriz[i][j];
            somaColuna += matriz[j][i];
        }
        if (somaLinha !== somaPrincipal || somaColuna !== somaPrincipal) {
            return false;
        }
    }

    return true;
}

// Exemplo de uso:
const matrizExemplo = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

const resultado = verificaQuadradoMagico(matrizExemplo);
console.log("É um quadrado mágico?", resultado);

