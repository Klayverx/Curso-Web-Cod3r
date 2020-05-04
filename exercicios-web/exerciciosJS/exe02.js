/**
 * Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
 */

function tipoTriangulo(lado1, lado2, lado3) {
    if (lado1 == 0 || lado1 < 0 || lado2 == 0 || lado2 < 0 || lado3 == 0 || lado3 < 0 ){
        console.log('Medidas inválidas!')
    } else if(lado1 == lado2 && lado2 == lado3) {
        console.log('Triângulo Equilátero!')
    } else if (lado1 == lado2 && lado2 != lado3) {
        console.log('Triângulo Isósceles!')
    } else if (lado1 == lado3 && lado2 != lado3) {
        console.log('Triângulo Isósceles!')
    } else if (lado2 == lado3 && lado2 != lado1) {
        console.log('Triângulo Isósceles!')
    } else if (lado1 != lado2  && lado1 != lado2 && lado2 != lado3) {
        console.log('Trinângulo Escaleno!')
    }
}

tipoTriangulo(3, 4, 2)
tipoTriangulo(0, 0, 0)
tipoTriangulo(1, 1, 2)
tipoTriangulo(3, 3, 3)