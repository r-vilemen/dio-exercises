function discount(price, discount) {
  return price - (price * discount) / 100;
}

const price = 1992;
const paymentMethod = 1;
const discountValue = 10;

if (paymentMethod === 1) {
  console.log(
    `O preço com desconto é: R$:${discount(price, 40)
      .toFixed(2)
      .replace(".", ",")}`
  );
} else if (paymentMethod === 2) {
  console.log(
    `O preço com desconto é: ${discount(price, 30)
      .toFixed(2)
      .replace(".", ",")}}`
  );
} else if (paymentMethod === 3) {
  console.log(
    `O preço com desconto é: ${discount(price, 20)
      .toFixed(2)
      .replace(".", ",")}}`
  );
} else if (paymentMethod === 4) {
  console.log(
    `O preço com desconto é: ${discount(price, 10)
      .toFixed(2)
      .replace(".", ",")}}`
  );
} else {
  console.log("Método de pagamento inválido");
}
