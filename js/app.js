alert('Hola Banker!!\nBienvenido al Banco Bank!\n(Aceptar para continuar)');

do {
    servicio = parseInt(prompt(mensajeBienvenida()));

    if ((servicio > 0) && (servicio <= tiposProductos.length) && (servicio != 3)) {
        alert(mensajeSeleccionPoducto(servicio));
    } else if ((servicio != 3) && (servicio != 0)) {
        alert('Seleccionar uno de los servicios detallados');
    }

} while ((servicio != 3) && (servicio != 0));


if (servicio == 3) {

    do {
        do {
            prestamo = parseInt(prompt(mensajePrestamos()));

            if ((prestamo > 0) && (prestamo <= tiposPrestamos.length)) {
                buscarArrays(tiposPrestamos, prestamo).mostrarPrestamo();
            } else if (((prestamo < 0) || (prestamo > tiposPrestamos.length) || (isNaN(prestamo) == true)) && (prestamo != 0)) {
                alert('Seleccionar una de la opciones detalladas');
            }

        } while (((prestamo < 0) || (prestamo > tiposPrestamos.length) || (isNaN(prestamo) == true)) && (prestamo != 0));

        if (prestamo != 0) {

            do {
                consutaPrestamo = parseInt(prompt('¿Quiere consultar por otra opción de préstamo?\n1 - Si\n2 - No\n0 - Para salir\nEn caso de indicar que "NO", continuará al simulador.'));
                if ((consutaPrestamo != 1) && (consutaPrestamo != 2) && (consutaPrestamo != 0)) {
                    alert('Indicar una opción correcta');
                }
            } while ((consutaPrestamo != 1) && (consutaPrestamo != 2) && (consutaPrestamo != 0));
        }

    } while ((consutaPrestamo != 2) && (consutaPrestamo != 0) && (prestamo != 0));

    if ((consutaPrestamo != 0) && (prestamo != 0)) {

        do {
            fechaN = prompt('Para continuar con el simulador, debe indicar su fecha de Nacimiento, ya que de la misma depende a que opción de préstamo puede acceder\n\nIngrese la fecha (en formato DDMMYYYY)');
            if (regexFecha.test(fechaN) == false) {
                alert("La fecha ingresada es inválida");
            }
        } while (regexFecha.test(fechaN) == false);

        do {
            opcionPrestamo = parseInt(prompt(mensajePrestamoEdad(fechaN)));

            if (((buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo) == undefined)) && (opcionPrestamo != 0)) {
                alert('Indicar una opción correcta');
            }

        } while (((buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo) == undefined)) && (opcionPrestamo != 0));

        if (opcionPrestamo != 0) {

            alert('Usted a seleccionado "' + buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).nombre + '"\n\nPara simular su préstamo vamos a necesitar que nos indique los siguientes datos:\n* Nivel de Ingresos\n* Monto del préstamo a solicitar\n* Cantidad de cuotas\n(Aceptar para continuar)')

            do {
                nivelIngresos = parseFloat(prompt('Nivel de Ingresos'));
                if (isNaN(nivelIngresos) || (nivelIngresos <= 0) || (nivelIngresos >= 1000001)) {
                    alert('Ingrese un importe valido: mayor a $0 (cero) y menor a $1.000.000');
                }
            } while (isNaN(nivelIngresos) || (nivelIngresos <= 0) || (nivelIngresos >= 1000001));

            do {
                montoPrestamo = parseFloat(prompt('Monto del préstamo a solicitar\nMonto máximo a solicitar: ' + formatoPesos(buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).montoMaxino)));
                if (isNaN(montoPrestamo) || (montoPrestamo <= buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).montoMinimo) || (montoPrestamo >= buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).montoMaxino)) {
                    alert('Ingrese un importe valido: mayor a ' + formatoPesos(buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).montoMinimo) + ' y menor a ' + formatoPesos(buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).montoMaxino));
                }
            } while (isNaN(montoPrestamo) || (montoPrestamo <= buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).montoMinimo) || (montoPrestamo >= buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).montoMaxino));

            do {
                cantidadCuotas = parseInt(prompt('Cantidad de cuotas a solicitar.\nCantidad máxima de cuotas a solicitar: ' + buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).cuotasMaximo))
                if (isNaN(cantidadCuotas) || (cantidadCuotas <= buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).cuotasMinimo) || (cantidadCuotas >= (buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).cuotasMaximo + 1))) {
                    alert('Ingrese una cantidad de cuotas validas: mayor a ' + buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).cuotasMinimo + ' y hasta ' + buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).cuotasMaximo);
                }
            } while (isNaN(cantidadCuotas) || (cantidadCuotas <= buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).cuotasMinimo) || (cantidadCuotas >= (buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).cuotasMaximo + 1)));

            alert('Información ingresada:\n* Edad: ' + edad(fechaN) + ' años\n* Nivel de Ingresos: ' + formatoPesos(nivelIngresos) + '\n* Monto del préstamo a solicitar: ' + formatoPesos(montoPrestamo) + '\n* Cantidad de cuotas a solicitar: ' + cantidadCuotas + ' cuotas\nCondiciones del préstamo\nTNA: ' + (buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).tasa * 100) + '%\nSeguro: ' + (buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).seguro * 100) + '% sobre el capital\n(Aceptar para simular el préstamo)');

            alert('Le detallamos la simulación de su préstamo:\n* Edad: ' + edad(fechaN) + ' años\n* Monto del préstamo a solicitar: ' + formatoPesos(montoPrestamo) + '\n* Tiene que ingresar ' + cantidadCuotas + ' cuotas de ' + formatoPesos(buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).valorCuota(montoPrestamo, cantidadCuotas)) + '\nCapital: ' + formatoPesos(montoPrestamo) + '\nInteres: ' + formatoPesos(buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).calculoInteres(montoPrestamo, cantidadCuotas)) + '\nSeguro: ' + formatoPesos(buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).calculoSeguro(montoPrestamo)) + '\nIVA: ' + formatoPesos(buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).calculoIva(montoPrestamo, cantidadCuotas)) + ' (sobre Int. y Seg.)\nImporte total: ' + formatoPesos(buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).totalAPagar(montoPrestamo, cantidadCuotas)) + '\nCFT: ' + buscarArraysPorId(selectorFiltro(edad(fechaN)), opcionPrestamo).cft(montoPrestamo, cantidadCuotas) + '%');
        }
    }
}
alert('Gracias por visitarnos.\nEsperamos que vuelta pronto!');