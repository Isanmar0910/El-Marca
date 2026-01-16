"use strict";


// Variables: let y const

// let edad;
// console.log("Edad: ", edad);

// edad = 27;
// console.log("Nueva edad" + edad);

// const centro = "CPIFP ALAN TURING"
// console.log("Centro" , centro);

// let puntos = 0;
// puntos += 10;
// console.log("Puntos =" , puntos);

// const a = 10;
// const b = 3;
// console.log("Suma", a +b);

// const precio = 15;
// const unidad= 3;



// console.log(`El tusi vale : ${precio*unidad}`);
// console.log("Perilla ❤️ Paula = PP💙🟦🏳️‍⚧️");


const juegos = ["Zelda", "FOURTNAIT", "babayi"]
console.log("Array completo" , juegos);

console.log("Array completo" , juegos.toString());
console.log("Cantidad:", juegos.length);
console.log("Primer elemento:", juegos[0]);


//Añadir elementos

juegos.push("MAINCRA");
console.log("Array completo", juegos.toString());

//Eliminar elementos

const eliminado = juegos.pop();
console.log("Juego eliminado: ", eliminado);
console.log("Array Completo", juegos.toString());

// Arrays mixtos
const mixto = ["hola", 42, true, { nombre: "Ana" }, [1, 2, 3]];

// console.log("Mixto:", mixto);I
// console.log("Elemento 0 (string):", mixto[0]);
// console.log("Elemento 1 (number):", mixto[1]);
// console.log("Elemento 2 (boolean):", mixto[2]);
// console.log("Elemento 3 (objeto):", mixto[3]);
// console.log("Elemento 4 (array):", mixto[4]);


// console.log("Mixto:", mixto);
// console.log(`Elemento 0 (${mixto[0].constructor.name}): ${mixto[0]}`);
// console.log(`Elemento 1 (${mixto[1].constructor.name}): ${mixto[1]}`);
// console.log(`Elemento 2 (${mixto[2].constructor.name}): ${mixto[2]}`);
// console.log(`Elemento 3 (${mixto[3].constructor.name}):`, mixto[3]); 
// console.log(`Elemento 4 (${mixto[4].constructor.name}):`, mixto[4]); 
// Objetos
// const alumno = {nombre: "Ana",
// curso: "1º.DAW",
// edad: 16,
// repetidor: false
// };


// console.log("Alumno:", alumno);
// console.log("Nombre:",alumno.nombre);
// console.log("Curso:", alumno.curso);
// console.log("Edad:", alumno.edad);
// console.log("Repetidor", alumno.repetidor);

// alumno.nombre = "Ana María"


// const producto = {nombre: "Corta Perillas",
//     precio: 200,
//     stock: 4,
// };

// console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio} - Stock: ${producto.stock}.`);

// Funciones. Si no hay return, devuelve undefined
function total(precio, unidades) {
    return precio * unidades;
}

console.log(`Total 9.99 x 3 = ${total(9.99, 3)}`);

// Función declarada como expresión (como valor de una variable)
let saludar = function (nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar);

// Función tradicional
const func = function () {
    return "Función tradicional.";
};

// Función flecha
const func2 = () => {
    // cuerpo de la función
    return "Función flecha";
};

// Función flecha con parámetros
const suma = (a, b) => {
    return a + b;
};

// Ejecución de funciones
console.log("Función tradicional:", func());      // Llamamos a func()
console.log("Función flecha:", func2());          // Llamamos a func2()
console.log("Suma =", suma(4, 10));               // Resultado: 14


//mini reto: funcion que reibe un objeto y devuelve un template strisng
function etiquetaProducto(prod) {
    return `${prod.nombre} - ${prod.precio}€`
}

console.log(etiquetaProducto({nombre: "Ratón", precio: 12.99}));

// Crear un array de 3 objetos productos (nombre/precio)
// y una función que devuelva el precio total sumado
// (aqui puedes hacerlo simple: sumar 3 elementos a mano, sin bucles si no quieres entrar).