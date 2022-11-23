const meter = 3.28084;
const feet = 0.3084;
const liter = 0.264;
const gallon = 3.785;
const kilogram = 2.204;
const pound = 0.453;
let indexUnit = document.getElementById("input");
const convertBtn = document.getElementById("convert")
const meterFeetResult = document.getElementById("meter-feet");
const literGallonResult = document.getElementById("liter-gallon");
const kgPoundResult = document.getElementById("kg-pound");


convertBtn.addEventListener("click", function () {
    let meterToFt = indexUnit.value * meter;
    let feetToMetter = indexUnit.value * feet;
    meterFeetResult.innerHTML = `${indexUnit.value} meters = ${meterToFt.toFixed(3)} feets | ${indexUnit.value} feets = ${feetToMetter.toFixed(3)} meters`;
    let literToGallon = indexUnit.value * liter;
    let gallonToLiter = indexUnit.value * gallon;
    literGallonResult.innerHTML = `${indexUnit.value} liters = ${literToGallon.toFixed(3)} gallons | ${indexUnit.value} gallons = ${gallonToLiter.toFixed(3)} liters`;
    let kilogramToPound = indexUnit.value * kilogram;
    let poundToKilogram = indexUnit.value * pound;
    kgPoundResult.innerHTML = `${indexUnit.value} kilograms = ${kilogramToPound.toFixed(3)} pounds | ${indexUnit.value} pounds = ${poundToKilogram.toFixed(3)} kilograms`;
})
