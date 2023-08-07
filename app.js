// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// // solo un registro en consola para nosotros.
console.log(sum(7,3))

// // exporta la función para usarla en otros archivos 
// // (similar a la palabra clave `export` cuando se usa webpack)


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function fromEuroToDollar (euro) {
    let resp = euro * 1.2;
    return resp;
}
function FromDollarToYen (dollars){
    let euro = dollars / 1.2;
    let yen = euro * 127.9;
    return yen;
}
function FromYenToPound (yen){
    let euro = yen / 127.9;
    let resp3 = euro * 0.8;
    return resp3;
}
module.exports = { sum, fromEuroToDollar, FromDollarToYen, FromYenToPound };