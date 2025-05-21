// 3) Elabore um algoritmo que calcule o valor a ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo:

// Código | Condição de Pagamento                  | Desconto/Juros
// -------|----------------------------------------|----------------
// 1      | À vista Débito                         | 10% de desconto
// 2      | À vista Dinheiro ou PIX                | 15% de desconto
// 3      | Em duas vezes                          | Preço normal (sem juros)
// 4      | Acima de duas vezes                    | Preço normal + 10% de juros

const precoEtiqueta = 100;
const condicaoPagamento = 1; // Código da condição de pagamento
let precoFinal;

switch (condicaoPagamento) {
  case 1:
    precoFinal = precoEtiqueta * 0.9; // 10% de desconto
    break;
  case 2:
    precoFinal = precoEtiqueta * 0.85; // 15% de desconto
    break;
  case 3:
    precoFinal = precoEtiqueta; // Preço normal (sem juros)
    break;
  case 4:
    precoFinal = precoEtiqueta * 1.1; // Preço normal + 10% de juros
    break;
  default:
    console.log("Condição de pagamento inválida");
}

console.log(`O valor a ser pago é: R$ ${precoFinal.toFixed(2)}`);
