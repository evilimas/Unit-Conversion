const conversionBtn = document.getElementById('conversion-btn');
const inputEl = document.getElementById('input-el');
let lengthEl = document.getElementById('length-el');
let volumeEl = document.getElementById('volume-el');
let massEL = document.getElementById('mass-el');

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

conversionBtn.addEventListener('click', function () {
  let inputValue = inputEl.value;

  if (isNaN(inputValue)) {
    alert('Please enter a number!');
    return;
  }
  if (inputValue > 10000) {
    alert('Number is to large');
    return;
  }
  if (inputValue <= 0) {
    alert('Number is to small');
    return;
  }

  // Length

  let metToFeet = inputValue * meterToFeet;
  let feetToMet = inputValue / meterToFeet;

  lengthEl.textContent = `${inputValue} meter = ${metToFeet.toFixed(
    3
  )} feet | ${inputValue} feet = ${feetToMet.toFixed(3)} meters`;

  // Volume

  let litToGallon = inputValue * literToGallon;
  let gallonToLit = inputValue / literToGallon;

  volumeEl.textContent = `${inputValue} liters = ${litToGallon.toFixed(
    3
  )} gallons | ${inputValue} gallons = ${gallonToLit.toFixed(3)} liters`;

  //Mass

  let kiloToPound = inputValue * kilogramToPound;
  let PoundToKilo = inputValue / kilogramToPound;

  massEL.textContent = `${inputValue} kilogram = ${kiloToPound.toFixed(
    3
  )} pounds | ${inputValue} pounds = ${PoundToKilo.toFixed(3)} kilograms`;
});

// Dark mode
document.getElementById('toggle').addEventListener('click', function () {
  let bodyClass = document.querySelector('.body');
  let sectionClass1 = document.querySelector('.section1');
  let sectionClass2 = document.querySelector('.section2');
  let sectionClass3 = document.querySelector('.section3');
  let svgEl = document.querySelector('.svg-icon');
  let h3El1 = document.querySelector('.h3-1');
  let h3El2 = document.querySelector('.h3-2');
  let h3El3 = document.querySelector('.h3-3');
  let p1El = document.getElementById('length-el');
  let p1E2 = document.getElementById('volume-el');
  let p1E3 = document.getElementById('mass-el');

  p1El.classList.toggle('p-dark');
  p1E2.classList.toggle('p-dark');
  p1E3.classList.toggle('p-dark');
  h3El1.classList.toggle('h3-dark');
  h3El2.classList.toggle('h3-dark');
  h3El3.classList.toggle('h3-dark');
  svgEl.classList.toggle('svg-icon-light');
  bodyClass.classList.toggle('body-dark');
  sectionClass1.classList.toggle('section-dark');
  sectionClass2.classList.toggle('section-dark');
  sectionClass3.classList.toggle('section-dark');
});
