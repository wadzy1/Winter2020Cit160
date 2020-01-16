function calculateTax() {
  const taxRate = 0.06;

  let totalCost = document.getElementById('cost').value;
  let userTaxRate = document.getElementById('tax-rate').value;
  if (!userTaxRate) {
    userTaxRate = taxRate;
  }
  //1.06 * 10
  let costWithTax = (+userTaxRate + 1) * totalCost;
  document.getElementById('answer').innerText = costWithTax.toFixed(2);
}
