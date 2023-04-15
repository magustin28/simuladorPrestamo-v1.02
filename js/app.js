alert('Hola Banker!!\nBienvenido al Banco Bank!\n(Aceptar para continuar)');

do {
    servicio = parseInt(prompt('Por cual servicio quiere consultar\n1 - Cuentas (Próximamente)\n2 - Tarjetas de Crédito (Próximamente)\n3 - Préstamos\n0 - Para salir'));
    if (servicio == 1) {
        alert('Usted indico "Cuentas", próximamente habilitaremos este servicio\n(Aceptar para regresar al Menú Principal)');
    } else if (servicio == 2) {
        alert('Usted indico "Tarjetas de Crédito", próximamente habilitaremos este servicio\n(Aceptar para regresar al Menú Principal)');
    } else if ((servicio != 3) && (servicio != 0)) {
        alert('Seleccionar uno de los servicios detallados');
    }
} while ((servicio != 3) && (servicio != 0));


if (servicio == 3) {

    do {
        do {
            prestamo = parseInt(prompt('Usted a seleccionado "Préstamos"\nLas opciones que tenemos disponibles actualmente son las siguientes:\n1 - ' + tpPrestamos(1).nombre + '\n2 - ' + tpPrestamos(2).nombre + '\n3 - ' + tpPrestamos(3).nombre + '\n0 - Para salir\nSelecione una opción para ver con mayor detalle.'));

            if ((prestamo > 0) && (prestamo <= tiposPrestamos.length)) {
                tpPrestamos(prestamo).mostrarPrestamo();
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
            fechaN = prompt('Para continuar con el simulador, debe indicar su fecha de Nacimiento, ya que de la misma depende a que opción de préstamo puede acceder\n\nIngrese la fecha (en formato DD/MM/YYYY)');
            if (regexFecha.test(fechaN) == false) {
                alert("La fecha ingresada es inválida");
            }
        } while (regexFecha.test(fechaN) == false);

        do {
            let mensaje = 'De acuerdo a su edad: ' + edad(fechaN) + ' años, puede acceder a las siguentes opciones de préstamos:\n';

            if ((edad(fechaN) >= 18) && (edad(fechaN) < 80)) {
                mensaje += '1 - ' + tpPrestamos(1).nombre + '\n2 - ' + tpPrestamos(2).nombre;
            } else if (edad(fechaN) >= 80) {
                mensaje += '1 - ' + tpPrestamos(3).nombre;
            } else {
                mensaje += '1 - ' + tpPrestamos(2).nombre;
            }

            mensaje += '\n0 - Para salir';

            opcionPrestamo = parseInt(prompt(mensaje));

            if ((opcionPrestamo != 1) && (opcionPrestamo != 2) && (opcionPrestamo != 0)) {
                alert('Indicar una opción correcta');
            }

        } while ((opcionPrestamo != 1) && (opcionPrestamo != 2) && (opcionPrestamo != 0));

        if (opcionPrestamo != 0) {

            if ((edad(fechaN) >= 18) && (edad(fechaN) < 80)) {
                opcionPrestamo;
            } else if (edad(fechaN) >= 80) {
                opcionPrestamo = 3;
            } else {
                opcionPrestamo = 2;
            }

            alert('Usted a seleccionado "' + tpPrestamos(opcionPrestamo).nombre + '"\n\nPara simular su préstamo vamos a necesitar que nos indique los siguientes datos:\n* Nivel de Ingresos\n* Monto del préstamo a solicitar\n* Cantidad de cuotas\n(Aceptar para continuar)')

            do {
                nivelIngresos = parseFloat(prompt('Nivel de Ingresos'));
                if (isNaN(nivelIngresos) || (nivelIngresos <= 0) || (nivelIngresos >= 1000001)) {
                    alert('Ingrese un importe valido: mayor a $0 (cero) y menor a $1.000.000');
                }
            } while (isNaN(nivelIngresos) || (nivelIngresos <= 0) || (nivelIngresos >= 1000001));

            do {
                montoPrestamo = parseFloat(prompt('Monto del préstamo a solicitar\nMonto máximo a solicitar: ' + formatoPesos(tpPrestamos(opcionPrestamo).montoMaxino)));
                if (isNaN(montoPrestamo) || (montoPrestamo <= tpPrestamos(opcionPrestamo).montoMinimo) || (montoPrestamo >= tpPrestamos(opcionPrestamo).montoMaxino)) {
                    alert('Ingrese un importe valido: mayor a ' + formatoPesos(tpPrestamos(opcionPrestamo).montoMinimo) + ' y menor a ' + formatoPesos(tpPrestamos(opcionPrestamo).montoMaxino));
                }
            } while (isNaN(montoPrestamo) || (montoPrestamo <= tpPrestamos(opcionPrestamo).montoMinimo) || (montoPrestamo >= tpPrestamos(opcionPrestamo).montoMaxino));

            do {
                cantidadCuotas = parseInt(prompt('Cantidad de cuotas a solicitar.\nCantidad máxima de cuotas a solicitar: ' + tpPrestamos(opcionPrestamo).cuotasMaximo))
                if (isNaN(cantidadCuotas) || (cantidadCuotas <= tpPrestamos(opcionPrestamo).cuotasMinimo) || (cantidadCuotas >= (tpPrestamos(opcionPrestamo).cuotasMaximo + 1))) {
                    alert('Ingrese una cantidad de cuotas validas: mayor a ' + tpPrestamos(opcionPrestamo).cuotasMinimo + ' y hasta ' + tpPrestamos(opcionPrestamo).cuotasMaximo);
                }
            } while (isNaN(cantidadCuotas) || (cantidadCuotas <= tpPrestamos(opcionPrestamo).cuotasMinimo) || (cantidadCuotas >= (tpPrestamos(opcionPrestamo).cuotasMaximo + 1)));

            alert('Información ingresada:\n* Edad: ' + edad(fechaN) + ' años\n* Nivel de Ingresos: ' + formatoPesos(nivelIngresos) + '\n* Monto del préstamo a solicitar: ' + formatoPesos(montoPrestamo) + '\n* Cantidad de cuotas a solicitar: ' + cantidadCuotas + ' cuotas\nCondiciones del préstamo\nTNA: ' + (tpPrestamos(opcionPrestamo).tasa * 100) + '%\nSeguro: ' + (tpPrestamos(opcionPrestamo).seguro * 100) + '% sobre el capital\n(Aceptar para simular el préstamo)');

            alert('Le detallamos la simulación de su préstamo:\n* Edad: ' + edad(fechaN) + ' años\n* Monto del préstamo a solicitar: ' + formatoPesos(montoPrestamo) + '\n* Tiene que ingresar ' + cantidadCuotas + ' cuotas de ' + formatoPesos(valorCuota(totalAPagar(montoPrestamo, tpPrestamos(opcionPrestamo).tasa, tpPrestamos(opcionPrestamo).seguro), cantidadCuotas)) + '.\nCapital: ' + formatoPesos(montoPrestamo) + '\nInteres: ' + formatoPesos(calculoInteres(montoPrestamo, tpPrestamos(opcionPrestamo).tasa, cantidadCuotas)) + '\nSeguro: ' + formatoPesos(calculoSeguro(montoPrestamo, tpPrestamos(opcionPrestamo).seguro)) + '\nImporte total: ' + formatoPesos(totalAPagar(montoPrestamo, calculoInteres(montoPrestamo, tpPrestamos(opcionPrestamo).tasa, cantidadCuotas), (calculoSeguro(montoPrestamo, tpPrestamos(opcionPrestamo).seguro)))) + '\nCFT: ' + cft(totalAPagar(montoPrestamo, calculoInteres(montoPrestamo, tpPrestamos(opcionPrestamo).tasa, cantidadCuotas), (calculoSeguro(montoPrestamo, tpPrestamos(opcionPrestamo).seguro))), montoPrestamo, cantidadCuotas) + '%');
        }
    }
}
alert('Gracias por visitarnos.\nEsperamos que vuelta pronto!');