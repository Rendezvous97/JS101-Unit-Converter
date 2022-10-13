let lengthOutput = document.getElementById("length-output")
let volumeOutput = document.getElementById("volume-output")
let massOutput = document.getElementById("mass-output")
const convertBtn = document.getElementById("convert-btn")
const inputValue = document.getElementById("number-to-convert")

// function lengthConverter(){
//     const meterToFeet = (inputValue.value*3.281).toFixed(3)
//     const feetToMeter = (inputValue.value/3.281).toFixed(3)
//     const lengthCaption = `${inputValue.value} meters = ${meterToFeet} feet | 
//     ${inputValue.value} feet = ${feetToMeter} meters`
//     return lengthCaption
// }


// convertBtn.addEventListener("click", function(){
//     lengthOutput.textContent = lengthConverter()

//     inputValue.value = ""
// })


/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function unitConverter(unit){
    let caption = ""
    if (unit=="length"){
        const meterToFeet = (inputValue.value*3.281).toFixed(3)
        const feetToMeter = (inputValue.value/3.281).toFixed(3)
        caption = `${inputValue.value} meters = ${meterToFeet} feet | 
        ${inputValue.value} feet = ${feetToMeter} meters`
    } else if (unit=="volume"){
        const litresToGallons = (inputValue.value*0.264).toFixed(3)
        const gallonstoLitres = (inputValue.value/0.264).toFixed(3)
        caption = `${inputValue.value} litres = ${litresToGallons} gallons | 
        ${inputValue.value} gallons = ${gallonstoLitres} litres`
    } else {
        const kilosToPounds = (inputValue.value*2.204).toFixed(3)
        const poundsToKilos = (inputValue.value/2.204).toFixed(3)
        caption = `${inputValue.value} kilos = ${kilosToPounds} pounds | 
        ${inputValue.value} pounds = ${poundsToKilos} kilos`
    }
    
    return caption
}


convertBtn.addEventListener("click", function(){
    lengthOutput.textContent = unitConverter("length")
    volumeOutput.textContent = unitConverter("volume")
    massOutput.textContent = unitConverter("mass")
    
    inputValue.value = ""
})