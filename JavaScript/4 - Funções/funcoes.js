function firstName(name) {
  console.log(`Meu primeiro nome é: ${name}`);
}

function lastName(sobrenome) {
  console.log(`Meu sobrenome é: ${sobrenome}`);
}

function idade(idade) {
  if (idade < 18 && idade > 0) {
    console.log(`Minha idade é: ${idade}, portanto, sou menor de idade.`);
  } else if (idade >= 18 && idade < 60) {
    console.log(`Minha idade é: ${idade}, portanto, sou maior de idade.`);
  } else if (idade >= 60) {
    console.log(`Minha idade é: ${idade}, portanto, sou idoso.`);
  } else if (idade == 0) {
    console.log(`Minha idade é: ${idade}, portanto, sou um recém-nascido.`);
  } else if (idade < 0) {
    console.log("idade inválida");
  }
}

firstName("Rodrigo");
lastName("Vilemen");
idade(-1);
