// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let rango = amigos.length;
console.log(amigos);

function imprimirAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for( let i = 0; i < rango; i++){
        let pos = document.createElement("li");
        //lista.appendChild(pos);
        pos.innerHTML = amigos[i];

        lista.appendChild(pos);
       
    }

    
} // POSIBLES ELEMENTOS A MEJORAR: AGREGAR UNA VALIDACIÓN PARA QUER NO ACEPTE NÚMEROS

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if(nombre === ''){
        alert("Ingresa un nombre");
    }else 
        amigos.push(nombre);
        rango++;

    document.getElementById("amigo").value = '';
    console.log(amigos);
    imprimirAmigos();
    
    return;

} // POSIBLES  ELEMENTOS A MEJORAR: HACER UNA VALIDACIÓN PARA QUE NO SE IMPRIMA UNDIFINED CUANDO NO SE ESCRIBE ALGO

//console.log(amigos);
