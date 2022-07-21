function calculateTaxes() {
  const value = prompt('Enter a value: ');

  let result;

  // 21% IVA, 9% Impuesto PAIS, 45% Retroactivo a moneda extranjera

  let taxes = 21 + 9 + 45;
  let taxes_percentage = (100 + taxes) / 100;

  if (value >+ 0) {
    result = parseFloat(value * taxes_percentage).toFixed(2);
    console.log(`The amount with taxes is $${result} ARS`);
  } else {
    console.log('Invalid value, try again');
  }
}

function calculateMultipleTaxes() {
  const value = prompt('Enter the values separated with comma: ').split(",");

  let result;

  // 21% IVA, 9% Impuesto PAIS, 45% Retroactivo a moneda extranjera

  let taxes = 21 + 9 + 45;
  let taxes_percentage = (100 + taxes) / 100;

  if (value.length > 0) {
    value.forEach(element => {
      result = parseFloat(element * taxes_percentage).toFixed(2);
      const history = new valuesHistory(result);
      console.log(history);
      console.log(`The amount with taxes is $${history.price} ARS`);
    });
  } else {
    console.log('Invalid value, try again');
  }
}

function valuesHistory(price) {
  this.price = price;
}

