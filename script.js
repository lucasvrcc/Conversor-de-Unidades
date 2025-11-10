let r; // Variavel global de resultados

// Metros / Pés
let modoDistancia = "MpraP";
function converterDistancia(){
    let v = Number(document.getElementById('distancia').value);

    if(modoDistancia === "MpraP"){
        r = v * 3.28084;
        document.getElementById('resultado').textContent =
            v + " Metros = " + r.toFixed(2) + " Pés";
    } 
    else{
        r = v / 3.28084;
        document.getElementById('resultado').textContent =
            v + " Pés = " + r.toFixed(2) + " Metros";
    }
}
function trocarDistancia(){
    if(modoDistancia === "MpraP"){
        modoDistancia = "PpraM";
        document.getElementById('labelDistancia').textContent = "Pés (FT): ";
    } 
    else{
        modoDistancia = "MpraP";
        document.getElementById('labelDistancia').textContent = "Metros (M): ";
    }

    document.getElementById('distancia').value = "";
    document.getElementById('resultado').textContent = "";
}

// Quilogramas / Libras
let modoPeso = "KpraL";
function converterPeso(){
    let v = Number(document.getElementById('peso').value);

    if(modoPeso === "KpraL"){
        r= v * 2.20462;
        document.getElementById('resultado').textContent =
            v + " KG = " + r.toFixed(2) + " LB";
    } 
    else{
        r = v / 2.20462;
        document.getElementById('resultado').textContent =
            v + " LB = " + r.toFixed(2) + " KG";
    }
}
function trocarPeso(){
    if(modoPeso === "KpraL"){
        modoPeso = "LpraK";
        document.getElementById('labelPeso').textContent = "Libras (LB):";
    } 
    else{
        modoPeso = "KpraL";
        document.getElementById('labelPeso').textContent = "Quilogramas (KG):";
    }

    document.getElementById('peso').value = "";
    document.getElementById('resultado').textContent = "";
}

// Celsius / Farenheit
let modoTemp = "CpraF";
function converterTemperatura(){
    let v = Number(document.getElementById('temp').value);

    if(modoTemp === "CpraF"){
        r= (v * 9 / 5) + 32;
        document.getElementById('resultado').textContent =
            v + "°C = " + r.toFixed(2) + "°F";
    } 
    else{
        r = (v - 32) * 5 / 9;
        document.getElementById('resultado').textContent =
            v + "°F = " + r.toFixed(2) + "°C";
    }
}
function trocarTemperatura(){
    if(modoTemp === "CpraF"){
        modoTemp = "FpraC";
        document.getElementById('labelTemp').textContent = "Fahrenheit (°F):";
    } 
    else{
        modoTemp = "CpraF";
        document.getElementById('labelTemp').textContent = "Celsius (°C):";
    }

    document.getElementById('temp').value = "";
    document.getElementById('resultado').textContent = "";
}