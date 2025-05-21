// 2) O Índice de Massa Corporal (IMC) é um critério da Organização Mundial de Saúde para indicar a condição de peso de uma pessoa adulta.

// Fórmula do IMC:
// IMC = peso / (altura * altura)

// Elabore um algoritmo que, dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo:

// IMC em adultos - Condição:
// - Abaixo de 18,5: Abaixo do peso
// - Entre 18,5 e 25: Peso normal
// - Entre 25 e 30: Sobrepeso
// - Entre 30 e 40: Obesidade
// - Acima de 40: Obesidade Grave

const peso = 66;
const altura = 1.63;
const imc = peso / Math.pow(altura, 2);

let condicao;
if (imc < 18.5) {
  condicao = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 25) {
  condicao = "Peso normal";
} else if (imc >= 25 && imc < 30) {
  condicao = "Sobrepeso";
} else if (imc >= 30 && imc < 40) {
  condicao = "Obesidade";
} else {
  condicao = "Obesidade Grave";
}

console.log(`Seu IMC é ${imc.toFixed(2)} e sua condição é: ${condicao}`);
