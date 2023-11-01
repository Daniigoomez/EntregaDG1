
function saludar(){
let nombreUsuario = prompt ("Hola!! ingresa por favor tu nombre")

let apellidoNombre = prompt ("Ingresa tu apellido")
alert("hola " + apellidoNombre)
}
saludar()


let edad = 18
let edadDelUsuario = prompt("ingrese edad")
if (edadDelUsuario <9){
    alert ("usted es menor, no puede ingresar")
}else if(edadDelUsuario >=9 && edadDelUsuario <=17){
    alert ("no cumple con su edad")
}else if(edadDelUsuario >18){
    alert ("ya falta poco, digame su color")
}else{
    alert ("no cumple la condición intente mas tarde")
}
let color = prompt("¿cual es tu color favorito?")
if(color == "rojo"){
    alert("usted eligio su color")
}else {
    alert("color incorrecto!")

}

let mascota = prompt ("animal preferido")
if(mascota =="perro"){
    alert("tu respuesta es correcta")

}else {
    alert("usuario incorrecto,intentemos con codigo")
}
 
function sumar(codigo1,codigo2){
    codigo1 = parseInt(prompt("ingrese codigo1")) 
    codigo2 = parseInt(prompt("ingrese codigo2"))

    let resultado = codigo1+codigo2 
    alert("el resultado de tu codigo es " + resultado)
}
sumar()
console.log ("Ingresar con codigo de Seguridad")

alert("intentemos con codigo")

let tuCodigo = true
let intentos = 1

do{
    let nombre1 = prompt("ingrese Codigo correspondiente")
    if (nombre1 === null){
        break
    }

    if(nombre1 === "33" && intentos <=5){
        alert("Su codigo es correcto")
        tuCodigo = false
        console.log("Es correcto tu codigo, intente mas tarde")
        intentos ++
     }else {
        alert("su codigo no es correcto")
        break
     }

}while(tuCodigo)