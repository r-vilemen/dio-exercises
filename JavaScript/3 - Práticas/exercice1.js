// 1) Faça um algoritmo que, dadas as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a
// sua média e a sua classificação conforme a tabela abaixo:

// Cálculo da média:
// (nota 1 + nota 2 + nota 3) / 3

// Classificação:
// - Média menor que 5: Reprovação
// - Média entre 5 e 7: Recuperação
// - Média acima de 7: Aprovação

const nota1 = 7;
const nota2 = 2;
const nota3 = 0;
const media = (nota1 + nota2 + nota3) / 3;

const frase =
  "A média do aluno é: " + media.toFixed(2) + ", portanto, o aluno foi ";

if (media < 5) {
  console.log(frase + "REPROVADO.");
} else if (media >= 5 && media < 7) {
  console.log(frase + "para a RECUPERAÇÃO.");
} else {
  console.log(frase + "APROVADO.");
}
