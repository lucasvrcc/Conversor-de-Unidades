// Distância
let modoDistancia = "MpraP";

function converterDistancia(){
    let v = Number(document.getElementById('distancia').value);

    if(modoDistancia === "MpraP"){
        let p = v * 3.28;
        document.getElementById('resultado').innerHTML =
            v + " Metros = " + p.toFixed(2) + " Pés";
    } 
    else{
        let m = v / 3.28;
        document.getElementById('resultado').innerHTML =
            v + " Pés = " + m.toFixed(2) + " Metros";
    }
}

function trocarDistancia(){
    if(modoDistancia === "MpraP"){
        modoDistancia = "PpraM";
        document.getElementById('labelDistancia').innerHTML = "Pés: ";
    } 
    else{
        modoDistancia = "MpraP";
        document.getElementById('labelDistancia').innerHTML = "Metros: ";
    }

    document.getElementById('distancia').value = "";
    document.getElementById('resultado').innerHTML = "";
}

// Peso
let modoPeso = "KpraL";

function converterPeso(){
    let v = Number(document.getElementById('peso').value);

    if(modoPeso === "KpraL"){
        let l = v * 2.20462;
        document.getElementById('resultado').innerHTML =
            v + " KG = " + l.toFixed(2) + " LB";
    } 
    else{
        let k = v / 2.20462;
        document.getElementById('resultado').innerHTML =
            v + " LB = " + k.toFixed(2) + " KG";
    }
}

function trocarPeso(){
    if(modoPeso === "KpraL"){
        modoPeso = "LpraK";
        document.getElementById('labelPeso').innerHTML = "Libras (LB):";
    } 
    else{
        modoPeso = "KpraL";
        document.getElementById('labelPeso').innerHTML = "Quilogramas (KG):";
    }

    document.getElementById('peso').value = "";
    document.getElementById('resultado').innerHTML = "";
}

// Temperatura
let modoTemp = "CpraF";

function converterTemperatura(){
    let v = Number(document.getElementById('temp').value);

    if(modoTemp === "CpraF"){
        let f = (v * 9 / 5) + 32;
        document.getElementById('resultado').innerHTML =
            v + "�C = " + f.toFixed(2) + "�F";
    } 
    else{
        let c = (v - 32) * 5 / 9;
        document.getElementById('resultado').innerHTML =
            v + "�F = " + c.toFixed(2) + "�C";
    }
}

function trocarTemperatura(){
    if(modoTemp === "CpraF"){
        modoTemp = "FpraC";
        document.getElementById('labelTemp').innerHTML = "Fahrenheit (�F):";
    } 
    else{
        modo = "CpraF";
        document.getElementById('labelTemp').innerHTML = "Celsius (�C):";
    }

    document.getElementById('temp').value = "";
    document.getElementById('resultado').innerHTML = "";
}