window.addEventListener('load', start);

const units = ['sub-zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis' ,'sete', 'oito', 'nove'];
const dozens = ['dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
const specialDozens = ['onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
const hundreds = ['cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

let rangeControl = document.querySelector("#rangeControl");
let actualNumber = document.querySelector("#actualNumber");
let writtenNumber = document.querySelector("#writtenNumber");
console.log(hundreds);

rangeControl.addEventListener('input', trackRange);

function trackRange(event) {
  console.log(event.target.value);

  //every time that the value changes, it needs to update the other
  //two inputs, so, I need to 'bind' them.
  
  //The first binding. The second is gonna be a little more challenging
  actualNumber.value = event.target.value;
  
  

}

function start() {
  console.log("Done!");
  console.log(rangeControl);
  console.log(actualNumber);
  console.log(writtenNumber);
}

