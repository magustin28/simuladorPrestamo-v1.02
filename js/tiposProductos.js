// Tipo de Productos

const cuentas = new Producto(1, 'Cuentas', '(Próximamente)');
const tarjetasCredito = new Producto(2, 'Tarjetas de Crédito', '(Próximamente)');
const prestamos = new Producto(3, 'Préstamos', '');


// Array de tipo de Productos

const tiposProductos = [cuentas, tarjetasCredito,prestamos];

console.log(tiposProductos);

// Nuevo producto

const seguros = new Producto(4, 'Seguros', '(Próximamente)');
tiposProductos.push(seguros);