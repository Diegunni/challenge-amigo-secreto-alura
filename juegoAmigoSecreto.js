// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let arregloAux = [];
let rango = amigos.length;
console.log(amigos);


function asignarTextoAEtiqueta(ID, texto){
    let etiquetaHTML = document.getElementById(ID);
    etiquetaHTML.innerHTML = texto ;
    return;
}

function imprimirAmigos(){

   // asignarTextoAEtiqueta("listaAmigos", "");
   let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for( let i = 0; i < rango; i++){
        let pos = document.createElement("li");
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


function sortearAmigo(){
    let sorteo = Math.floor(Math.random()*rango);
    
    if(rango < 2 ){
       
       asignarTextoAEtiqueta("resultado", "Ingrese 2 o más nombres para iniciar el sorteo");
        return;
    }else if(arregloAux.length == rango){
        asignarTextoAEtiqueta("resultado", "Ya se sortearon todos los nombres");
    }else{

        if(arregloAux.includes(sorteo))
            return sortearAmigo();
        else{
            arregloAux.push(sorteo);
            console.log(arregloAux);
             asignarTextoAEtiqueta("resultado", `El amigo sorteado es: ${amigos[sorteo]}`);
         
        }
    }
}

