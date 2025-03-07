// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log(amigos);
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if(nombre === ''){
        alert("Ingresa un nombre");
    }else 
        amigos.push(nombre);

    document.getElementById("amigo").value = '';
    console.log(amigos);
    
    return;

}

//console.log(amigos);