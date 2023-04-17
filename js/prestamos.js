// Objeto Préstamo

class Prestamo{

    constructor (id, nombre, edadMinima, edadMaxima, montoMinimo, montoMaxino, garantia, tipoGarantia, tasa, seguro, cuotasMinimo, cuotasMaximo) {
        this.id = id;
        this.nombre = nombre;
        this.edadMinima = edadMinima;
        this.edadMaxima = edadMaxima;
        this.montoMinimo = montoMinimo;
        this.montoMaxino = montoMaxino;
        this.garantia = garantia;
        this.tipoGarantia = tipoGarantia;
        this.tasa = tasa;
        this.seguro = seguro;
        this.cuotasMinimo = cuotasMinimo;
        this.cuotasMaximo = cuotasMaximo;
    }


    // Mostrar detalle de prestamo
    mostrarPrestamo = function(){
        alert(
            'Linea de Préstamo: "' + this.nombre + 
            '"\nEdad mínima: ' + this.edadMinima +
            ' años\nEdad límite: ' + this.edadMaxima + 
            ' años\nMonto máximo a solicitar: ' + formatoPesos(this.montoMaxino) +
            '\nRequiere de garantía: ' + this.garantia +
            '\nTipo de garantía: ' + this.tipoGarantia + 
            '\nTasa : ' + this.tasa * 100 +
            '% TNA\nSeguro: ' + this.seguro * 100 +
            '% sobre el capital solicitado\nMáximo de cuotas a solicitar: ' + this.cuotasMaximo + ' cuotas'
        )
    };
}