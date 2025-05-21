// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
// 1️⃣ Preço do etanol;
// 2️⃣ Preço da gasolina;
// 3️⃣ O tipo de combustível que está no seu carro;
// 4️⃣ Gasto médio de combustível do carro por KM;
// 5️⃣ Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 4.79;
const precoGasolina = 5.79;
const Combustivel = 2; // 1 - Etanol | 2 - Gasolina
const tipoCombustivel = Combustivel === 1 ? "etanol" : "gasolina";
const gastoMedioPorKm = 10;
const distanciaEmKm = 100;
const valorGasto =
  (distanciaEmKm / gastoMedioPorKm) *
  (Combustivel === 1 ? precoEtanol : precoGasolina);

console.log(
  `O valor da sua viagem com ${tipoCombustivel} é de R$:${valorGasto
    .toFixed(2)
    .replace(".", ",")}.`
);
