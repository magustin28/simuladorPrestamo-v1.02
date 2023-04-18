//Mensaje de Bienvenida
function mensajeBienvenida() {
    let mensaje;
    let contador = 1;
    mensaje = 'Por cual servicio quiere consultar\n';

    tiposProductos.forEach((producto) => {
        mensaje += `${contador} - ${producto.nombre} ${producto.disponible}\n`;
        contador++;
    });

    mensaje += '0 - Para salir';

    return mensaje;
}

//Buscar dentro de Objetos
function buscarArrays(array, valor) {
    let indice = valor - 1;
    return array[indice];
}

//Buscar dentro de Objetos por Id
function buscarArraysPorId(array, valor) {
    selecion = array.find((objeto) => objeto.id == valor);
    return selecion;
}

//Mensaje de Seleccion de Productos
function mensajeSeleccionPoducto(valor) {
    let mensaje;
    mensaje = `Usted indico "${buscarArrays(tiposProductos, valor).nombre}", próximamente habilitaremos este servicio\n(Aceptar para regresar al Menú Principal)`;
    return mensaje
}

//Mensaje Préstamos
function mensajePrestamos() {
    let mensaje;
    let contador = 1;
    mensaje = 'Usted a seleccionado "Préstamos"\nLas opciones que tenemos disponibles actualmente son las siguientes:\n';

    tiposPrestamos.forEach((prestamo) => {
        mensaje += `${contador} - ${prestamo.nombre}\n`;
        contador++;
    });

    mensaje += '0 - Para salir\nSelecione una opción para ver con mayor detalle.';

    return mensaje;
}

//Calcular la edad
function edad(valor) {
    let fechaNacimiento = new Date(valor.slice(4, 8), valor.slice(2, 4) - 1, valor.slice(0, 2))
    let diferenciaMilisegundos = new Date() - fechaNacimiento;
    let edad = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 365));
    return edad;
}

//Elgir filtro según la edad
function selectorFiltro (funcionEdad){
    let arraySeleccionado;

    if (funcionEdad >= 18 && funcionEdad <= 35) {
    arraySeleccionado = prestamoFiltro18a80;
    } else if (funcionEdad >= 80) {
    arraySeleccionado = prestamoFiltroMas80;
    } else {
    arraySeleccionado = prestamoFiltro35a80;
    }

    return arraySeleccionado;
}

//Mensaje de los Préstamos Filtrados
function mensajePrestamosFiltrados(filtro) {
    let mensaje = '';

    filtro.forEach((prestamo) => {
        mensaje += `${prestamo.id} - ${prestamo.nombre}\n`;
    });

    return mensaje;
}

//Mensaje de Tipos de Préstamos de acuedo a la edad
function mensajePrestamoEdad(funcionEdad) {
    let mensaje;

    mensaje = `De acuerdo a su edad: ${edad(funcionEdad)} años, puede acceder a las siguentes opciones de préstamos:\n${mensajePrestamosFiltrados(selectorFiltro(edad(funcionEdad)))}0 - Para salir`;
    
    return mensaje;
}

// Formato Dinero/Pesos
function formatoPesos(valor) {
    return valor.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
}