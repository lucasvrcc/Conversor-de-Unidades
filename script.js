// Metros / Pés
let modoDistancia = "MpraP";

function converterDistancia(){
    let v = Number(document.getElementById('distancia').value);
    let r;

    if(modoDistancia === "MpraP"){
        let p = v * 3.28084;
        document.getElementById('resultado').textContent =
            v + " Metros = " + p.toFixed(2) + " Pés";
    } 
    else{
        let m = v / 3.28084;
        document.getElementById('resultado').textContent =
            v + " Pés = " + m.toFixed(2) + " Metros";
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
        let l = v * 2.20462;
        document.getElementById('resultado').textContent =
            v + " KG = " + l.toFixed(2) + " LB";
    } 
    else{
        let k = v / 2.20462;
        document.getElementById('resultado').textContent =
            v + " LB = " + k.toFixed(2) + " KG";
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
        let f = (v * 9 / 5) + 32;
        document.getElementById('resultado').textContent =
            v + "°C = " + f.toFixed(2) + "°F";
    } 
    else{
        let c = (v - 32) * 5 / 9;
        document.getElementById('resultado').textContent =
            v + "°F = " + c.toFixed(2) + "°C";
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