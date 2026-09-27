// crear un script que arme un resumen de un pedido
// Primero crear una variable que guarde el nombre, ciudad, si tiene rapyturbo
// imprimir un saludo al cliente tipo  Hola Camila, tu pedido a domicilio en Bogotá.
// Usa concatenación para armar ese saludo mezclando texto fijo con tus variables (unir dos cadenas de texto arrays)
// juntar al cliente y sus productos en una sola unidad el pedido (tiene un cliente, una ciudad, una lista de productos, un estado)

// precio de los productos, domicilio y propina
let precio_productos= {
    domicilio : 6000,
    propina : 0.10,
    hamburguesa: 15000,
    papas_fritas: 8000,
    gaseosa: 5000,
}

//datos del cliente y su pedido
const cliente = {
    nombre: "Camila",
    ciudad: "Bogotá",
    tieneRappyTurbo: true,
    productos: ["Hamburguesa", "Papas fritas", "Gaseosa"],
};


// subtotal del pedido y propina
let subtotal_pedido = precio_productos.hamburguesa + precio_productos.papas_fritas + precio_productos.gaseosa + precio_productos.domicilio;
let subtotal_propina = subtotal_pedido * precio_productos.propina;

//paso a paso requerido para el pedido
console.log(`Hola ${cliente.nombre} tu pedido a domicilio en ${cliente.ciudad} cuenta con RappyTurbo: ${cliente.tieneRappyTurbo}`);
console.log(`Tu carrito de compras incluye: ${cliente.productos}`);
console.log(`Tu primer articulo es: ${cliente.productos[0]}`);
cliente.productos.push("Helado");
console.log(`Haz añadido un ${cliente.productos[cliente.productos.length - 1]} al carrito`);
console.log(`Tu carrito de compras actualizado incluye: ${cliente.productos}`);
console.log(`Haz eliminado el ultimo articulo del carrito: ${cliente.productos.pop()}`);
console.log(`Tu carrito de compras actualizado incluye: ${cliente.productos}`);
console.log(`El carrito tiene ${cliente.productos.length} articulos`);

// Datos del cliente y su pedido
const pedido = {
    cliente: cliente.nombre,
    ciudad: cliente.ciudad,
    productos: cliente.productos,
    estado: "En preparación",
};
// imprimir el pedido
console.log(pedido);
//actualizacion de estado del pedido
pedido.estado = "En camino";
// imprimir el pedido actualizado
console.log(`Su pedido a sido actualizado a: ${pedido.estado}`);
console.log(pedido);
// imprimir el total del pedido
console.log(`Su pedido tiene un total de: ${subtotal_pedido + subtotal_propina}`);