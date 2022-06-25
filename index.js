let nombre = prompt("Ingresa una palabra que quieras que se repita");
let repeticiones = parseInt(prompt("Ingresa la cantidad de veces que queres que se repita la palabra"));

for (let i = 1; i <= repeticiones; i++){
    let repeNombre = `${nombre} x ${i}`;
    alert(repeNombre);
    console.log((repeNombre));
}