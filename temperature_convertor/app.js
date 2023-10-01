

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
    document.getElementById("ot").innerHTML=valNum+273.15;
}


