const jugador ={
    nombre: "kira",
    nivel: 3,
    vidas: 2,
    tieneLlave: false,
    compañero: null,
    inventario: ["espada", "poción", "mapa"],
};

console.log(jugador.nivel);
console.log(jugador.nombre);
console.log(jugador.nivel);

jugador.tieneLlave = true;
jugador.vidas = jugador.vidas - 1;
jugador.monedas = 50;
console.log(jugador);

console.log(jugador.inventario);
jugador.inventario.push("mapa");
console.log(`${jugador.nombre} tiene ${jugador.inventario.length} objetos`);

console.log(jugador.puntos);
console.log(jugador.compañero);