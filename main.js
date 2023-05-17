var tablaCompleta= false;
var variablesArray = [];
var freqAbsArray = [];
const columna = 5;
var cantVariables = 0;


function generarTabla() {

    cantVariables = document.getElementById("cantVariables").value;
    var contenedorTabla = document.getElementById("contenedorTabla");
    var btnCalcular = document.getElementById("btn-calcular");


    contenedorTabla.innerHTML = "";
    var table = "<table>";

        table += "<tr>";
            table += "<th>Variable</th>"
            table += "<th>nk</th>"
            table += "<th>fk</th>"
            table += "<th>Nk</th>"
            table += "<th>Fk</th>"
        table += "</tr>";

    for (var f = 1; f <= cantVariables; f++) {
        table += "<tr>";
        for ( var c = 1; c <= columna; c++ ) {
            if (c === 1) {
                table += `<td> <input type="text" id="variable${f}"> </td>`;
            };
            if (c === 2 ) {
                table += `<td> <input type="number" id="freqAbs${f}"> </td>`;
            };
            if ( c !== 1 && c !== 2) {
                    table += "<td></td>";
            };
        }
        table += "</tr>";
    }

    table += "<tr>";
            table += "<th>TOTAL</th>"
            table += "<th></th>"
            table += "<th></th>"
            table += "<th></th>"
            table += "<th></th>"
            table += "</tr>";
    table += "</table>";
    contenedorTabla.innerHTML = table;
    btnCalcular.style.display = "inline";

} ;

function calcular() {  
    var nkSuma = 0; 
    var fkSuma = 0;
    var NK = 0;
    var FK = 0;
    variablesArray = [];;
    freqAbsArray = []
    for (var i = 1; i <= cantVariables; i++) {
    var variable = document.getElementById(`variable${i}`).value;
    var freqAbs = document.getElementById(`freqAbs${i}`).value;
    variablesArray.push(variable);
    freqAbsArray.push(freqAbs);
    nkSuma= (nkSuma + Number(freqAbs));
    
    }
    var contenedorTabla = document.getElementById("contenedorTabla");

    contenedorTabla.innerHTML = "";

    var table = "<table>";

    table += "<tr>";
        table += "<th>Variable</th>"
        table += "<th>nk</th>"
        table += "<th>fk</th>"
        table += "<th>Nk</th>"
        table += "<th>Fk</th>"
    table += "</tr>";

for (var f = 1; f <= cantVariables; f++) {
    table += "<tr>";
    for ( var c = 1; c <= columna; c++ ) {
        if (c === 1) {
            table += `<td> ${ variablesArray[f-1] } </td>`;
        };
        if (c === 2 ) {
            table += `<td> ${ freqAbsArray[f-1] } </td>`;
        };
        if ( c === 3) {
            table += `<td> ${ (freqAbsArray[f-1] / nkSuma ).toFixed(4)} </td>`;
            fkSuma = fkSuma + Number((freqAbsArray[f-1] / nkSuma ).toFixed(4));

        };
        if ( c === 4) {
            NK = NK + Number( freqAbsArray[f-1] );
            table += `<td> ${ (NK) } </td>`;
        };
        if ( c === 5) {
            FK = FK + Number( (freqAbsArray[f-1] / nkSuma ).toFixed(4) );
            table += `<td> ${ (FK) } </td>`;
            console.log(FK);
        };
    }
    table += "</tr>";
}

table += "<tr>";
        table += "<th>TOTAL</th>";
        table += `<th>${ nkSuma }</th>`;
        table += `<th>${ fkSuma }</th>`;
        table += `<th></th>`;
        table += `<th></th>`;
        table += "</tr>";
table += "</table>";
contenedorTabla.innerHTML = table;

}