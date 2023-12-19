let ataqueJugador
let ataqueEnemigo
function iniciar_juego(){
    let botonSeleccionar = document.getElementById("boton_seleccionar")
    botonSeleccionar.addEventListener("click", seleccionar_mascota_jugador)
    let botonFuego = document.getElementById("boton_fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton_agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton_tierra")
    botonTierra.addEventListener("click", ataqueTierra)
}
function seleccionar_mascota_jugador(){
    let Hipodoge = document.getElementById("Hipodoge")
    let Capipepo = document.getElementById("Capipepo")
    let Ratigueya = document.getElementById("Ratigueya")
    let spanMascotaJugador = document.getElementById("Mascota_jugador")
    if(Hipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    }else if(Capipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    }else if(Ratigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya"
    }else{
        alert("Selecciona una mascota")
    }
    seleccionar_mascota_enemigo()
}
function seleccionar_mascota_enemigo(){
    let ataqueAletorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("Mascota_enemigo")
    if(ataqueAletorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    }else if(ataqueAletorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }else{
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}
function ataqueFuego(){
    ataqueJugador = "Fuego"
    seleccionar_ataque_enemigo()
}
function ataqueAgua(){
    ataqueJugador = "Agua"
    seleccionar_ataque_enemigo()
}
function ataqueTierra(){
    ataqueJugador = "Tierra"
    seleccionar_ataque_enemigo()
}
function seleccionar_ataque_enemigo(){
    let ataqueAletorio = aleatorio(1,3)
    if(ataqueAletorio == 1){
        ataqueEnemigo = "Fuego"
    }else if(ataqueAletorio == 2){
        ataqueEnemigo = "Agua"
    }else{
        ataqueEnemigo = "Tierra"
    }
    crear_mensaje()
}
function combate(){
    if(pc == jugador){
        alert("ganaste")
    }else if(jugador == 1 && pc == 3){
        alert("ganaste")
        triunfos = triunfos + 1
    }else if(jugador == 2 && pc == 1){
        alert("ganaste")
        triunfos = triunfos + 1
    }else if(jugador == 3 && pc == 2){
        alert("ganaste")
        triunfos = triunfos + 1 
    }else{
        alert("perdiste")
    }
}    
function crear_mensaje(){
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + "- GANASTE"
    sectionMensajes.appendChild(parrafo)
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}
window-addEventListener("load", iniciar_juego)