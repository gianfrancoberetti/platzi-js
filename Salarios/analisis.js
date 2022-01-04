

const salariosCol = colombia.map(persona => persona.salario);


const salariosColOrded = salariosCol.sort((salarioA, salarioB) => salarioA-salarioB);



// Funciones

function formulaMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
     }
    )
    const promediolista = sumaLista / lista.length;

    return promediolista;
} 

function esPar(numero){
    return (numero % 2 === 0);
}




// mediana


function medianaSalariosCol(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista)){
        let elemento1 = lista[mitad]
        let elemento2 = lista[mitad - 1]
        let mediana = formulaMediaAritmetica(elemento1, elemento2);

        return mediana
    }else {
        let mediana = lista[mitad]

        return mediana
    }
}


const medianaCol = medianaSalariosCol(salariosColOrded)




//mediana top 10


const spliceStart = (salariosColOrded.length * 90) / 100;
const spliceCount = salariosColOrded.length - spliceStart;

const salariosTop10 = salariosColOrded.splice(spliceStart, spliceCount)


const medianaTop10 = medianaSalariosCol(salariosTop10);






console.log(medianaCol)
console.log(medianatop10)