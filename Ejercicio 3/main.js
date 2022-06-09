var objeto = {
    nombre: "Rafa",
    apellido: "Salmeron"
};
var string = "Hola";
var numero = 23;
var booleano = false;
var nulo = null;
var nodefined = undefined;
var simbolo = Symbol('Hola').description;

console.log(simbolo);

function ejercicio3 (...variables){
    for(let i = 0; i < variables.length; i++){
        console.log("Valor : " +  variables[i] + " || Tipo de variable : " + typeof(variables[i]) );
    }
}

ejercicio3(objeto, string, numero, nulo, nodefined, simbolo, booleano);