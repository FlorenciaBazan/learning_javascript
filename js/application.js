function darkMode(){
  var SetTheme = document.body;
  SetTheme.classList.toggle("dark-mode")
  var theme;
  if(SetTheme.classList.contains("dark-mode")){
      console.log("Dark mode");
      theme = { theme: {color: "DARK"} };
  }else{
      console.log("Light mode");
      theme = { theme: {color: "LIGHT"} };
  }
  localStorage.setItem("PageTheme", JSON.stringify(theme));
}

const interval = setInterval(() => {
  let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
  console.log(GetTheme);
  if(GetTheme.theme.color === "DARK"){
      document.body.classList = "dark-mode";
  }else{
      document.body.classList = "";
  }
}, 5);
setTimeout(() => clearInterval(interval), 10)


const triggerInput = document.getElementById('triggerInput')
triggerInput.addEventListener('click', renderInput);

function renderInput() {
  input = document.getElementById('singleCalculateInput')
  input.removeAttribute("hidden");
  calculateTaxes(input);
}

function calculateTaxes() {
  input = arguments[0];
  
  console.log(input.value);
  
  
  let result;
  
  // 21% IVA, 9% Impuesto PAIS, 45% Retroactivo a moneda extranjera
  
  let taxes = 21 + 9 + 45;
  let taxes_percentage = (100 + taxes) / 100;
  
  input.addEventListener("keyup", function(event) {
    if(event.key === 'Enter') {
      var value = input.value;
      if (value >+ 0) {
        console.log(value);
        result = parseFloat(value * taxes_percentage).toFixed(2);
        console.log(`The amount with taxes is $${result} ARS`);
      } else {
        console.log('Invalid value, try again');
      }
    }
  });
}

const MultipleTaxesInput = document.getElementById('calculateMultipleElement')
MultipleTaxesInput.addEventListener('click', calculateMultipleTaxes);

function calculateMultipleTaxes() {
  const values = prompt('Enter the values separated with comma: ').split(",");
  
  let result;
  
  // 21% IVA, 9% Impuesto PAIS, 45% Retroactivo a moneda extranjera
  
  let taxes = 21 + 9 + 45;
  let taxes_percentage = (100 + taxes) / 100;
  
  if (values.length > 0) {
    values.forEach(value => {
      result = parseFloat(value * taxes_percentage).toFixed(2);
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

