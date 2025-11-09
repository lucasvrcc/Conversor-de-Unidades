// JavaScript source code

//Temperatura
let modo = "CpraF";

function converter() {
    let v = Number(document.getElementById('temp').value);

    if (modo === "CpraF") {
        let f = (v * 9 / 5) + 32;
        document.getElementById('resultado').innerHTML =
            v + "ºC = " + f.toFixed(2) + "ºF";
    } else {
        let c = (v - 32) * 5 / 9;
        document.getElementById('resultado').innerHTML =
            v + "ºF = " + c.toFixed(2) + "ºC";
    }
}

function trocar() {
    if (modo === "CpraF") {
        modo = "FpraC";
        document.getElementById('labelTemp').innerHTML = "Fahrenheit (ºF):";
    } else {
        modo = "CpraF";
        document.getElementById('labelTemp').innerHTML = "Celsius (ºC):";
    }

    document.getElementById('temp').value = "";
    document.getElementById('resultado').innerHTML = "";
}
