const conversionBtn = document.getElementById('conversion-btn');
const inputEl = document.getElementById('input-el');
const lengthEl = document.getElementById('length-el');
const volumeEl = document.getElementById('volume-el');
const massEL = document.getElementById('mass-el');

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

conversionBtn.addEventListener('click', function () {
  const inputValue = inputEl.value;

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

  const metToFeet = inputValue * meterToFeet;
  const feetToMet = inputValue / meterToFeet;

  lengthEl.textContent = `${inputValue} meter = ${metToFeet.toFixed(
    3
  )} feet | ${inputValue} feet = ${feetToMet.toFixed(3)} meters`;

  // Volume

  const litToGallon = inputValue * literToGallon;
  const gallonToLit = inputValue / literToGallon;

  volumeEl.textContent = `${inputValue} liters = ${litToGallon.toFixed(
    3
  )} gallons | ${inputValue} gallons = ${gallonToLit.toFixed(3)} liters`;

  //Mass

  const kiloToPound = inputValue * kilogramToPound;
  const PoundToKilo = inputValue / kilogramToPound;

  massEL.textContent = `${inputValue} kilogram = ${kiloToPound.toFixed(
    3
  )} pounds | ${inputValue} pounds = ${PoundToKilo.toFixed(3)} kilograms`;
});

// Dark/Light mode toggle function

document.getElementById('toggle').addEventListener('click', function () {
  const bodyClass = document.querySelector('.body');
  const sectionClass1 = document.querySelector('.section1');
  const sectionClass2 = document.querySelector('.section2');
  const sectionClass3 = document.querySelector('.section3');
  const svgEl = document.querySelector('.svg-icon');
  const h3El1 = document.querySelector('.h3-1');
  const h3El2 = document.querySelector('.h3-2');
  const h3El3 = document.querySelector('.h3-3');
  const p1El = document.getElementById('length-el');
  const p1E2 = document.getElementById('volume-el');
  const p1E3 = document.getElementById('mass-el');

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
