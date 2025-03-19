// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = []; // Lista de nombres ingresados

// Función para agregar un nombre a la lista
function agregarNombre() {
    let input = document.getElementById("nombre");
    let nombre = input.value.trim(); // Elimina espacios extra

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (nombres.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }

    nombres.push(nombre); // Agrega el nombre al array
    input.value = ""; // Limpia el campo de texto
    mostrarNombres(); // Muestra la lista actualizada
}

// Función para mostrar los nombres ingresados en pantalla
function mostrarNombres() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = ""; // Limpia la lista antes de actualizarla

    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        li.classList.add("nombre-item");
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (nombres.length < 2) {
        alert("Debes ingresar al menos dos nombres para realizar el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSecreto = nombres[indiceAleatorio];

    document.getElementById("resultado").textContent = "Tu amigo secreto es: " + amigoSecreto;
}

// Función para reiniciar la lista de nombres y el resultado
function reiniciar() {
    nombres = [];
    document.getElementById("listaNombres").innerHTML = "";
    document.getElementById("resultado").textContent = "";
}
