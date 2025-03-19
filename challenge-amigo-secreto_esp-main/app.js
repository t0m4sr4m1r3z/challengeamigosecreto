// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del campo de texto
    const nombreInput = document.getElementById("amigo");
    const nombre = nombreInput.value.trim();

    // Validar que el nombre no esté vacío y no se repita
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue añadido.");
        return;
    }

    // Añadir el nombre al array
    amigos.push(nombre);

    // Mostrar el nombre en la lista de amigos
    const listaAmigos = document.getElementById("listaAmigos");
    const nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = nombre;
    listaAmigos.appendChild(nuevoAmigo);

    // Limpiar el campo de texto
    nombreInput.value = "";
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert("Añade al menos un nombre antes de sortear.");
        return;
    }

    // Seleccionar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados anteriores
    const resultadoItem = document.createElement("li");
    resultadoItem.textContent = `El amigo secreto es "${amigoSecreto}"`;
    resultado.appendChild(resultadoItem);
}