// Buscar prestamo
function tpPrestamos(valor) {
    let indice = valor - 1;
    return tiposPrestamos[indice];
}

// Calcular la edad
function edad(valor) {
    let partesFecha = valor.split('/');
    let fechaNacimiento = new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]);
    let diferenciaMilisegundos = new Date() - fechaNacimiento;
    let edad = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 365));
    return edad;
}

// Formato Dinero/Pesos
function formatoPesos(valor) {
    return valor.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
}

I//Cálculo Interes
function calculoInteres (montoPrestamo, tasa, cantidadCuotas){
    let interes = montoPrestamo * tasa / 12 * cantidadCuotas;
    return interes;
}

//Cálculo Seguro
function calculoSeguro (montoPrestamo, tasaSeguro) {
    let seguro = montoPrestamo * tasaSeguro;
    return seguro;
}

//Cálculo Total a Pagar
function totalAPagar (montoPrestamo, interes, seguro) {
    let totalAPagar = montoPrestamo + interes + seguro;
    return totalAPagar;
}

//Cálculo Valor de la Cuota
function valorCuota (totalAPagar, cantidadCuotas) {
    let valorCuota = totalAPagar / cantidadCuotas;
    return valorCuota;
}

//Cálculo CFT
function cft (totalAPagar, montoPrestamo, cantidadCuotas) {
    let cft = (((totalAPagar / montoPrestamo) - 1) / cantidadCuotas * 12 * 100).toFixed(2);
    return cft;
}