// 1 - Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
// Crie um método que, dada a quantidade de quilômetros e o preço do combustível, calcule o valor gasto em reais para realizar este percurso.

class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularGasto(distancia, precoCombustivel) {
    return distancia * this.gastoMedioPorKm * precoCombustivel;
  }
}

lamborghini = new Carro("Lamborghini", "Amarelo", 0.2);
console.log(
  `O gasto para esta viagem é de: R$:${lamborghini
    .calcularGasto(100, 5)
    .toFixed(2)
    .replace(".", ",")}`
); // 100 km e R$ 5,00 o litro
