
const calcularPrecioConDescuento = (precio, descuento) => {

    return precio * (100 - descuento) / 100;
}


function onClickButtonPriceDiscount(){

    const price = document.getElementById("inputPrice").value;
    const discount = document.getElementById("inputDiscount").value;

    finalPrice = calcularPrecioConDescuento(price, discount);

    const resultP = document.getElementById("resultP");

    resultP.innerHTML = `el precio final es de $${finalPrice}`

}

