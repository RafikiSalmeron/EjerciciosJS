// EJERCICIO 1 // 
let ejer1 = ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"];
ejer1 = ejer1.fill("🃏",ejer1.indexOf("🍕")+1, ejer1.length);
console.log(ejer1);

// EJERCICIO 2 //
let ejer2 = ["🍕","🍕","🍍","🍕","🍕"];
let pinas = (currentValue) => currentValue === "🍍";
console.log(ejer2.some(pinas));

// EJERCICIO 3 //
let ejer3 = ["🍕","🍕","🍍","🍕","🍕"];
console.log(ejer3.indexOf("🍍"));
ejer3.splice(ejer3.indexOf("🍍"), 1);
console.log(ejer3);


// EJERCICIO 4 //
let ejer4 = ["🍓", "🍋","🍓", "🍋","🍓"];
for(let i = 0; i < ejer4.length; i++){
    if(ejer4.indexOf("🍓") != -1){
        ejer4.splice(ejer4.indexOf("🍓"), 1, "🍄");
    }
}
console.log(ejer4);

// EJERCICIO 5 //
let ejer5 = ["🌶", "🥛","🌶", "🥛","🌶", "🥛"];
let posis = [];
for(let i = 0; i < ejer5.length; i++){
    if(ejer5.indexOf("🌶", i) != -1){
        posis.push(ejer5.indexOf("🌶", i));
        i++;
    }
}
for(let i = 0; i < posis.length; i++){
    ejer5.splice( posis[i]+1+i, 0, "🥵");
}
console.log(ejer5);

// EJERCICO 6 // 
let ejer6 = ["🧧", "🧧","🧧","🃏", "🧧","🧧", "🧧"];
let posic = [];
for(let i = 0; i < ejer6.length; i++){
    if(i == 0){
        posic.push(ejer6[i]);
    }else if(ejer6[i] == ejer6[i-1]){
        posic.push("🃏"),
        posic.push(ejer6[i]);
    }
}
console.log(posic);

