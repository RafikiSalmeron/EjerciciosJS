const api = 'https://api.chucknorris.io/jokes/random';

function next(){
    fetch(api)
        .then(response => response.json())
        //llama a la funcion que cambia el valor en html
        .then(json => cambiarFrase(json));
}

function cambiarFrase(json){
    let span = document.getElementById("spanNext");
    span.innerHTML = json.value;
}