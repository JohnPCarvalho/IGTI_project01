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
  
  actualNumber.value = event.target.value;

  let stringNumber = actualNumber.value.toString();

  convertNumber(event.target.value);

  function convertNumber(number) {
    
    let convertedNumber = '';

    let stringNumber = number.toString();
    let separatedNumber = stringNumber.split('', stringNumber.length);
    console.log(separatedNumber);
    
    if (separatedNumber.length = 3) {
      //centena

      //se for diferente de cento e alguma coisa (100 ~ 199)
      if (separatedNumber[0] != 1 ) {
        convertedNumber += hundreds[separatedNumber[0]];
        console.log(convertedNumber);
      }
      //se cair dentro do cento e alguma coisa
      if (separatedNumber[0] == 1 ) {
        convertedNumber += hundreds[1];
        console.log(convertedNumber);
      }
      //dezena dentro da centena
      //dezena que nao for 0 ou da familia do 10 (10 ~ 19)
      if (separatedNumber[1] != 0 && separatedNumber[1] != 1) {
        convertedNumber += ' e ' + dozens[separatedNumber[1] - 1];
        console.log(convertedNumber);
      } 
      //dezena que estiver entre 11 e 19 (specialDozens)
      else if (separatedNumber[1] == 1 && separatedNumber[2] != 0){
        convertedNumber += ' e ' +  specialDozens[separatedNumber[2] - 1];
        console.log(convertedNumber);
      } 
      else if (separatedNumber[1] == 1 && separatedNumber[2] == 0) {
        console.log('passou');
        convertedNumber += ' e ' + dozens[0];
        console.log(convertedNumber);
      } 

      //dezena com unidade
      if(separatedNumber[1] != 1 && separatedNumber[2] != 0) {
        convertedNumber+= ' e ' + units[separatedNumber[2]];
        console.log(convertedNumber);
      }

      // unidade dentro da centena
      if (separatedNumber[1] == 0) {
        convertedNumber += ' e ' + units[separatedNumber[2]];
        console.log(convertedNumber);
      } 
      
      //centenas puras
      if (separatedNumber[0] > 1 && separatedNumber[1] == 0 && separatedNumber[2] == 0) {
        convertedNumber = hundreds[separatedNumber[0]];
        console.log(convertedNumber);
      }

      //cem
      if (separatedNumber[0] == 1 && separatedNumber[1] == 0 && separatedNumber[2] == 0) {
        convertedNumber = hundreds[0];
        console.log(convertedNumber);
      }

    } 
    if (separatedNumber.length == 2) {
      //dezena
      convertedNumber = dozens[separatedNumber[1]];
      convertedNumber += ' e ';
      
    } else {
      //unidade
    }
    return convertedNumber;
  }
}

function start() {
  console.log('Começou');
  }

