// EJERCICIO 1 //
let ejer1 = "Hola como estas";
ejer1 = ejer1.replace(/a/g, 'o');
console.log(ejer1);

// EJERCICIO 2 //
function ejer2(name){
    if(name.startsWith("aca")){
        console.log(true);
    }else{
        console.log(false);
    }
}
ejer2("academia");
ejer2("escuela");

// EJERCICIO 3 //
function ejer3(hola){
    console.log(hola.slice(0,5));
    console.log(hola.toLowerCase());
    console.log(hola.toUpperCase());
}
ejer3("Hola");

