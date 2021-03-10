window.addEventListener('load', start);

const units = ['sub-zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis' ,'sete', 'oito', 'nove'];
const dozens = ['dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
const specialDozens = ['onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
const hundreds = ['cem', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

let rangeControl = document.querySelector("#rangeControl");
let actualNumber = document.querySelector("#actualNumber");
let writtenNumber = document.querySelector("#writtenNumber");
console.log(hundreds);

rangeControl.addEventListener('input', trackRange);
rangeControl.addEventListener('input', convertNumber);

function trackRange(event) {
  //every time that the value changes, it needs to update the other
  //two inputs, so, I need to 'bind' them.
  //The first binding. The second is gonna be a little more challenging
  actualNumber.value = event.target.value;

  let stringNumber = actualNumber.value.toString();
  //console.log(stringNumber);  
  //let stringSeparated = stringNumber.split('', stringNumber.length);
  //console.log(stringSeparated);

  function convertNumber(event) {
    let number = event.target.value;
    let convertedNumber;
    
    let stringNumber = number.toString();
    let separatedNumber = stringNumber.split('', stringNumber.length);
    console.log('passando aqui');
    if (separatedNumber.length > 2) {
      //centena
      // for (let i = 0; i < separatedNumber.length; i++) {
      //   convertedNumber = hundreds[separatedNumber[i - 1]] + ' e'  
      // }
      convertedNumber = hundreds[separatedNumber[i - 1]]
      console.log(convertedNumber);
    } else if (separatedNumber.length > 1) {
      //dezena
    } else {
      //unidade
    }
    return convertedNumber;
  }

  convertNumber(event.target.value);
}

// function convertNumber(event) {
//   let number = event.target.value;
  
//   let stringNumber = number.toString();
//   let separatedNumber = stringNumber.split('', stringNumber.length);
//   console.log(separatedNumber);
// }



function start() {
  console.log('Começou');
}

