// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const LISTA_AMIGOS = document.querySelector('#listaAmigos')
const INPUT_AMIGO = document.querySelector('#amigo')
const RESULTADO = document.querySelector('#resultado')
const BTN_SORTEO = document.querySelector('#sortear')
let amigos = [] //inicio lista vacia



function agregarAmigo () {
    let amigo = INPUT_AMIGO.value; //carga el valor ingresado en el input
    
    if (amigos.length == 0){ //En caso de que se haya hecho algun sorteo borra la lista de amigos para empezar a cargar una nueva
        LISTA_AMIGOS.innerHTML = ""
        BTN_SORTEO.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear">Sortear amigo';
    }
    
    if (amigo == "") { //validacion en caso de no ingresar nada
        alert('Por favor, inserte un nombre.'); 
        return;
    }
    else if (amigos.includes(amigo)){ //validacion en caso de nombres duplicados
        alert('El nombre ya está cargado');
        INPUT_AMIGO.value = '';
        return;
    }
    else { 
        amigos.push(amigo);
        LISTA_AMIGOS.insertAdjacentHTML("beforeend",`<li>${amigo}</li>`); //agregado de la lista de amigos a medida que se genera. Me parece mas eficiente que recorrer cada vez la lista con un bucle
        INPUT_AMIGO.value = ''; //borrado del input para volver a ingresar otro nombre
        INPUT_AMIGO.focus(); //enfoca el input para que sea mas facil seguir ingresando nombres
        RESULTADO.innerHTML = ""; //borra cualquier mensaje en el espacio para el resultado
        if (amigos.length > 1){ //validacion para habilitar el boton de sorteo
            BTN_SORTEO.disabled = false;
        }
        return;
    }
}

function sortearAmigo(){
    if (amigos.length > 0){ //validacion de lista no vacia
        RESULTADO.innerHTML = `El amigo secreto es: ${amigos[Math.floor(Math.random()*amigos.length)]}`; //Muestra el resultado del sorteo
        amigos = []; //borro la lista para que no se vuelva a sortear
        BTN_SORTEO.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear">Reiniciar'; //Cambia el texto del boton para volver a sortear
        return;
    }
    else {
        LISTA_AMIGOS.innerHTML = ""; //Borra el listado de amigos despues que se hace el sorteo la proxima vez que se presiona el boton
        RESULTADO.innerHTML = ""; //Borra el resultado del sorteo
        BTN_SORTEO.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear">Sortear amigo'
        BTN_SORTEO.disabled = true; //Deshabilita el boton de sorteo
        return;
    }
}

INPUT_AMIGO.addEventListener('keypress', function(e){ //evento para que se pueda ingresar un nombre con la tecla enter
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});
