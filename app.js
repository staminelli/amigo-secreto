// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo () {
    let amigo = document.querySelector("#amigo").value
    console.log(amigo)
    if (amigo == "") {
        alert('Por favor, inserte un nombre.');
        return
    }
    else if (amigos.includes(amigo)){
        alert('El nombre está duplicado')
        document.querySelector('#amigo').value = '';
        return
    }
    else { 
        amigos.push(amigo)
        document.querySelector('#listaAmigos').insertAdjacentHTML("beforeend",`<li>${amigo}</li>`);
        document.querySelector('#amigo').value = '';
        console.log(amigos);
        return
    }
}

function sortearAmigo(){
    if (amigos.length > 0){
        
        return document.querySelector('#resultado').innerHTML = `El amigo secreto es: ${amigos[Math.floor(Math.random()*amigos.length)]}`
    }
    else {
        alert ('No hay ningun nombre para sortear')
        return
    }
}
