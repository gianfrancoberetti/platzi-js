const perimetroCuadrado = (lado) => {
    return lado * 4;
}

const areaCuadrado = (lado) =>{
    return lado * lado
}
const perimetroTriangulo = (lado) => {
    return lado * 3
}
const areaTriangulo = (base, altura) => {
    return (base * altura) / 2; 
}

const perimetroCircunferencia = (radio) => {
    PI = Math.PI
    return 2 * PI * radio
}


function calcularPerimetrocuadrado(){
    input = document.getElementById("inputCuadrado");
    value = input.value;

    const perimetro = perimetroCuadrado(value);
    
    alert(perimetro)
};


function calcularAreaCuadrado(){
    input = document.getElementById("inputCuadrado");
    value = input.value;

    const perimetro = areaCuadrado(value);
    
    alert(perimetro)
};

function calcularPerimetroTriangulo(){
    ladoTriangulo = document.getElementById("ladoTriangulo").value;


    const perimetro = perimetroTriangulo(ladoTriangulo)

    alert(perimetro)

}

function calcularAreaTriangulo (){
    baseTriangulo = document.getElementById("baseTriangulo").value;
    alturaTriangulo = document.getElementById("alturaTriangulo").value;

    const area = areaTriangulo(baseTriangulo, alturaTriangulo);

    alert(area)
}

function calcularPerimetroCircunferencia () {
    radioCircunferencia = document.getElementById("inputCirculo").value;

    const perimetro = perimetroCircunferencia(radioCircunferencia);

    alert(perimetro)
}

