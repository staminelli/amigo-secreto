// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [] //inicio lista vacia

function agregarAmigo () {
    let amigo = document.querySelector("#amigo").value; //carga el valor ingresado en el input
    if (amigos.length == 0){ //En caso de que se haya hecho algun sorteo borra la lista de amigos para empezar a cargar una nueva
        document.querySelector('#listaAmigos').innerHTML = "";
    }
    if (amigo == "") { //validacion en caso de no ingresar nada
        alert('Por favor, inserte un nombre.'); 
        return;
    }
    else if (amigos.includes(amigo)){ //validacion en caso de nombres duplicados
        alert('El nombre está duplicado');
        document.querySelector('#amigo').value = '';
        return;
    }
    else { 
        amigos.push(amigo);
        document.querySelector('#listaAmigos').insertAdjacentHTML("beforeend",`<li>${amigo}</li>`); //agregado de la lista de amigos a medida que se genera. Me parece mas eficiente que recorrer cada vez la lista con un bucle
        document.querySelector('#amigo').value = ''; //borrado del input para volver a ingresar otro nombre
        document.querySelector('#resultado').innerHTML = ""; //borra cualquier mensaje en el espacio para el resultado
        return;
    }
}

function sortearAmigo(){
    if (amigos.length > 0){ //validacion de lista no vacia
        document.querySelector('#resultado').innerHTML = `El amigo secreto es: ${amigos[Math.floor(Math.random()*amigos.length)]}`; //Muestra el resultado del sorteo
        amigos = []; //borro la lista para que no se vuelva a sortear
        return;
    }
    else {
        document.querySelector('#listaAmigos').innerHTML = ""; //Borra el listado de amigos despues que se hace el sorteo la proxima vez que se presiona el boton
        document.querySelector('#resultado').innerHTML = "No hay ningun nombre para sortear"; //Muestra en pantalla cuando se presiona el boton de sortear sin que se haya cargado ningun nombre
        
        return;
    }
}
