function formulaMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
     }
    )
    const promediolista = sumaLista / lista.length;

    return promediolista;
} 

// Mediana 

function calcularMediana(lista) {

    const mitadLista = parseInt(lista.length / 2);
    let mediana;



function esPar(numero) {
    if(numero % 2 === 0){
        return true;
    } else{
        return false;
    }
}
    if(esPar(lista.length)){



        let listaArreglada = lista.sort((a,b) => a - b)

        const elemento1 = listaArreglada[mitadLista];
        const elemento2 = listaArreglada[mitadLista - 1];
        const elemento1y2 = formulaMediaAritmetica([elemento1, elemento2])

        mediana = elemento1y2;

        return mediana;
    } else {
        mediana = lista[mitadLista]
        return mediana
    }

}

// Moda 

function calcularModa(lista) {
    
    let listaCount = {}

    lista.map((elemento) => {
        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1
        }
    })


    const listaArray = Object.entries(listaCount).sort( (a,b) =>  a[1] - b[1]);


    const moda = listaArray[listaArray.length -1]
    console.log(moda)

    return moda[0];
}








// HTML

function onButtonMedianaResult (lista){

    const input = document.getElementById("datos");
    const result = document.getElementById("result");


    let value = input.value;

    let valueArray = Array.from(value.split(','),Number);

    let mediana = calcularMediana(valueArray)

    result.innerHTML = `LA MEDIANA DE ESTE CONJUNTO ES DE ${mediana}`

};




function onButtonMediaResult () {
    const input = document.getElementById("datos");
    const result = document.getElementById("result");

    let value = input.value;

    let valueArray = Array.from(value.split(','),Number)


    let media = formulaMediaAritmetica(valueArray)

    console.log(media)


    result.innerHTML = `LA MEDIA DE ESTE CONJUNTO ES DE ${media}`

};

function onButtonModaResult() {

    const input = document.getElementById("datos");
    const result = document.getElementById("result");

    let value = input.value;

    let valueArray = Array.from(value.split(','),Number);

    let moda = calcularModa(valueArray);

    result.innerHTML = `LA MEDIA DE ESTE CONJUNTO ES DE ${moda}`
}