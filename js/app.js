
/*Ejercicio 1 - ARREGLOS
Crear un array llamado meses que almacene el nombre de los doce meses del año. Mostrar el
arreglo usando document.write() o document.body.innerHTML.

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let html = "<h2>Meses del año</h2>";
html += "<ul>";

for(let i = 0; i < meses.length; i++){
    html += `<li>${meses[i]}</li>`;
}

html += "</ul>";

document.getElementById("ejercicio1").innerHTML = html;*/





/*Ejercicio 2 
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y
almacenarlas en un arreglo. Cuando el usuario presiona “cancelar” se debe mostrar el
arreglo generado.*/

let ciudades = [];
let ciudad;
do {
    ciudad = prompt("Ingrese el nombre de una ciudad (Presione cancelar para finalizar):");
    if (ciudad) {
        ciudades.push(ciudad);
    }
} while (ciudad);

document.getElementById("ejercicio2").innerHTML =`<h2>Ciudades ingresadas</h2><ul> ${ciudades.map(ciudad => `<li>${ciudad}</li>`).join('')}  </ul>`;





/*Ejercicio 3
Crear una función esMayor(edad) que devuelva true si es >= 18.

function esMayor(edad) {
    return edad >= 18;
}

let edadUsuario = parseInt(prompt("Ingresá tu edad:"));
let esMayorDeEdad = esMayor(edadUsuario);
document.getElementById("ejercicio3").innerHTML = `<p>¿Es mayor de edad? ${esMayorDeEdad}</p>`;*/





/*Ejercicio 4
Crear una función longitud(cadena) que devuelva la longitud de una cadena. 

function longitud(cadena) {
    return cadena.length;
}

let cadenaUsuario = prompt("Ingresá una cadena:");
let longitudCadena = longitud(cadenaUsuario);
document.getElementById("ejercicio4").innerHTML = `<p>La longitud de la cadena "${cadenaUsuario}" es: ${longitudCadena}</p>`; */





/*Ejercicio 5
Crear una clase Persona con nombre y edad. Agregar un método que salude.

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}
let nombrePersona = prompt("Ingresá el nombre de la persona:");
let edadPersona = parseInt(prompt("Ingresá la edad de la persona:"));
let persona1 = new Persona(nombrePersona, edadPersona);
document.getElementById("ejercicio5").innerHTML = `<p>${persona1.saludar()}</p>`;*/





/*Ejercicio 6
Crear una clase Estudiante que herede de Persona y agregar un atributo curso a la clase
Estudiante.

class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }

    saludar() {
        return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y curso ${this.curso}.`;
    }
}
let cursoEstudiante = prompt("Ingresá el curso del estudiante:");
let estudiante1 = new Estudiante(nombrePersona, edadPersona, cursoEstudiante);
document.getElementById("ejercicio6").innerHTML = `<p>${estudiante1.saludar()}</p>`;*/








/*Ejercicio 7 – DOM
Crear una página con:
 un <p> con un texto inicial
 un <input> para escribir texto
 un botón
 Cuando el usuario haga clic en el botón:
1. El texto del <p> debe cambiar por el que escribió el usuario.
2. El color del <p> debe volverse azul.*/

let textoParrafo = document.getElementById('textoOriginal');
let textoUsuario = document.getElementById('textoUsuario');
let botonCambiarTexto = document.getElementById('cambiarTexto');
let botonVerTextoAnterior = document.getElementById('verTextoAnterior');


let textoOriginal = textoParrafo.textContent;

botonCambiarTexto.addEventListener('click', () => {
    textoParrafo.textContent = textoUsuario.value;
    textoParrafo.style.color = 'blue';
});

botonVerTextoAnterior.addEventListener('click', () => {
    textoParrafo.textContent = textoOriginal;
    textoParrafo.style.color = 'black';
});

