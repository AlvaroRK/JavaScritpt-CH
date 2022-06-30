const suma  = (a,b) => a + b;
const resta  = (a,b) => a - b;
const multi  = (a,b) => a * b;
const divi  = (a,b) => a / b;

/* ---ELEGIR ACTIVIDAD--- */
let actividad = parseInt(prompt("1 para lista de alumnos    2 para comprar productos"))
if (actividad == 1) {

    /* ---LISTA DE ALUMNOS Y EL PROMEDIO DE NOTAS DEL CURSO--- */

let cantAlumnos = parseInt(prompt("Decime la cantidad de alumnos"));
let pregPromedio = prompt("Va a querer saber le promedio general del curso? SI/NO");

class alumnos {
        constructor (nombre, apellido, edad, sexo){
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.sexo = sexo;
            this.aprobado = false;
        }
        
        paso(){
            this.aprobado = true;
        }
    }

for (let i = 1; i <= cantAlumnos; i++) {

    let pedirNombre = prompt("Decime tu nombre");
    let pedirApellido = prompt("Decime tu apellido");
    let edad = parseInt(prompt("Decime tu edad"));
    let sexo = prompt("Masculino o Femenino");


    const alumno$ = new alumnos (pedirNombre, pedirApellido, edad, sexo);

    const cursando = (pedirNombre, pedirApellido, edad) => {
        if (edad <= 5) {
            console.log (`${pedirNombre} ${pedirApellido} tenes ${edad} años vas al jardin`);
        } else if (edad <= 13){
            console.log(`${pedirNombre} ${pedirApellido} tenes ${edad} años vas a la primaria`);
        } else if (edad <= 18) {
            console.log(`${pedirNombre} ${pedirApellido} tenes ${edad} años vas al secundario`);
        } else {
            console.log(`${pedirNombre} ${pedirApellido} tenes ${edad} años seguis estudiando o trabajas?`);
        }
    }
    cursando(pedirNombre, pedirApellido, edad);
    alumno$.paso();

    console.log(alumno$);
}

    if (pregPromedio == "si"){
        let sumar = 0;

        for (let i = 1; i <= cantAlumnos; i++) {
            let notas = parseInt(prompt(`Diga la nota final del alumno nro ${i}`));

            sumar = suma(sumar, notas);
        }

        let promedio = divi(sumar, cantAlumnos);

        console.log(`El promedio de la nota general es de ${promedio}`);
    } 
    else if (pregPromedio == "no"){
        alert("No se mostró el promedio de notas")
    }
} else if (actividad == 2){

    /* ---COSTO TOTAL DE PRODUCTOS--- */

const descuento1 = 300;
const descuento2 = 100;

let totalPagar = 0;
let cantProductos = parseInt(prompt("Ingrese la cantidad de productos a llevar"));
let presupuesto = parseInt(prompt("Decime tu prespuesto"));

for (let i=1; i<= cantProductos; i++) {

    class productos {
        constructor (nombre, precio, cantidad) {
            this.nombre = nombre;
            this.precio = precio;
            this.cantidad = cantidad;
            this.vendido = false;
        }
    
        vender(){
            this.vendido = true;
        }
    }

    let nameProduct = prompt(`Ingresa el nombre del producto ${i}`);
    let priceProduct = parseFloat(prompt("Ingresa el precio del producto:"));
    let cantProduct = parseFloat(prompt("Ingresa la cantidad del producto:"));
    let priceCant = 0;

    if (cantProduct > 5 ) {
        priceCant = resta(multi(priceProduct, cantProduct), descuento1);
        console.log("Usaste el descuento de $300");
    } else if (cantProduct > 3 ) {
        priceCant = resta(multi(priceProduct, cantProduct), descuento2);
        console.log("Usaste el descuento de $100");
    }
    else {
        priceCant = multi(priceProduct, cantProduct);
    }
    


    let msj = (`Ingresaste ${nameProduct} x ${cantProduct} por $${priceCant}`);
    console.log(msj);

    totalPagar += priceCant;

    if (totalPagar > presupuesto) {
        alert("SOBREPASASTE TU PRESUPUESTO");
        console.log("SOBREPASASTE TU PRESUPUESTO");
        break;
    }


    const producto$ = new productos(nameProduct, priceProduct, cantProduct);
    producto$.vender();

    console.log(producto$);
}

let msjTotal = "El total a pagar es: $" + totalPagar;
console.log(msjTotal);
} else {
    alert("solo vale el 1 o 2")
}