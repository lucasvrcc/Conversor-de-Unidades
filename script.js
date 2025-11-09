// JavaScript source code

//Temperatura

function converter() {
    let c = Number(document.getElementById('c').value);
    let f = (c * 9 / 5) + 32;
    document.getElementById('resultado').innerText = c + "°C = " + f.toFixed(2) + "°F";
}