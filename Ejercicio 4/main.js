var saludar = (name) => {
    return name;
};

console.log(saludar("Rafiki"));

function ejercicio2 (ejer2){
    console.log(ejer2)
};

ejercicio2();

function hola (...vars){
    vars.forEach(element => {
        console.log(element)
    });
}

hola("Test", "con", "multiples", "parametros");