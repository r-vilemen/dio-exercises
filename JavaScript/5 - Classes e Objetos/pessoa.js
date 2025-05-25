// 2 - Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70 kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC.

Nome = "Rodrigo";
Peso = 75;
Altura = 1.75;

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / (this.altura * this.altura);
  }
}

jose = new Pessoa(Nome, Peso, Altura);

if (jose.calcularIMC() < 18.5) {
  console.log(
    `O IMC de ${jose.nome} é: ${jose
      .calcularIMC()
      .toFixed(2)
      .replace(".", ",")}e ele está abaixo do peso.`
  );
} else if (jose.calcularIMC() < 24.9) {
  console.log(
    `O IMC de ${jose.nome} é: ${jose
      .calcularIMC()
      .toFixed(2)
      .replace(".", ",")} e ele está com o peso normal.`
  );
} else if (jose.calcularIMC() < 29.9) {
  console.log(
    `O IMC de ${jose.nome} é: ${jose
      .calcularIMC()
      .toFixed(2)
      .replace(".", ",")} e ele está acima do peso.`
  );
} else if (jose.calcularIMC() < 34.9) {
  console.log(
    `O IMC de ${jose.nome} é: ${jose
      .calcularIMC()
      .toFixed(2)
      .replace(".", ",")} e ele está com obesidade grau 1.`
  );
} else if (jose.calcularIMC() < 39.9) {
  console.log(
    `O IMC de ${jose.nome} é: ${jose
      .calcularIMC()
      .toFixed(2)
      .replace(".", ",")} e ele está com obesidade grau 2.`
  );
} else {
  console.log(
    `O IMC de ${jose.nome} é: ${jose
      .calcularIMC()
      .toFixed(2)
      .replace(".", ",")} e ele está com obesidade grau 3.`
  );
}
