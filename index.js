let lengthOutput = document.getElementById("length-output")
let volumeOutput = document.getElementById("volume-output")
let massOutput = document.getElementById("mass-output")
const convertBtn = document.getElementById("convert-btn")
const inputValue = document.getElementById("number-to-convert")


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

function convertUnit(unit1, unit2, multiplier){
    const conversionOne = (inputValue.value * multiplier).toFixed(3)
    const conversionTwo = (inputValue.value / multiplier).toFixed(3)
    const caption = `${inputValue.value} ${unit1} = ${conversionOne} ${unit2} | 
    ${inputValue.value} ${unit2} = ${conversionTwo} ${unit1}`

    return caption
}

convertBtn.addEventListener("click", function(){
    lengthOutput.textContent = unitConverter("length")
    volumeOutput.textContent = unitConverter("volume")
    massOutput.textContent = unitConverter("mass")
    
    inputValue.value = ""
})