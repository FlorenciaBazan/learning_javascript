function calculateTaxes() {
  const value = prompt('Enter a value: ');

  let result;

  // 21% IVA, 9% Impuesto PAIS, 35% Retroactivo a moneda extranjera

  let taxes = 21 + 9 + 35;
  let taxes_percentage = (100 + taxes) / 100;

  if (value >+ 0) {
    result = parseFloat(value * taxes_percentage).toFixed(2);
    console.log(`The amount with taxes is $${result} ARS`);
  } else {
    console.log('Invalid value, try again');
  }
}