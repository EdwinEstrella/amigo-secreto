let amigos = [];

/**
 * Función para agregar un amigo a la lista
 */
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }
    
    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista.');
        inputAmigo.value = '';
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la visualización de la lista
    actualizarLista();
    
    // Limpiar resultado anterior si existe
    limpiarResultado();
}

/**
 * Función para actualizar la visualización de la lista de amigos
 */
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaAmigos.innerHTML = '';
    
    // Agregar cada amigo como un elemento de lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.className = 'friend-item';
        
        // Agregar botón para eliminar (opcional)
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = '×';
        botonEliminar.className = 'button-remove';
        botonEliminar.onclick = () => eliminarAmigo(index);
        botonEliminar.setAttribute('aria-label', `Eliminar ${amigo}`);
        
        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    });
}

/**
 * Función para eliminar un amigo de la lista
 */
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
    limpiarResultado();
}

/**
 * Función para sortear un amigo secreto
 */
function sortearAmigo() {
    // Verificar que hay al menos un amigo en la lista
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear. Agrega algunos nombres primero.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo seleccionado
    const amigoSeleccionado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    mostrarResultado(amigoSeleccionado);
}

/**
 * Función para mostrar el resultado del sorteo
 */
function mostrarResultado(nombreSeleccionado) {
    const resultado = document.getElementById('resultado');
    
    // Limpiar resultado anterior
    resultado.innerHTML = '';
    
    // Crear elemento para mostrar el resultado
    const li = document.createElement('li');
    li.innerHTML = `🎉 <strong>El amigo secreto es: ${nombreSeleccionado}</strong> 🎉`;
    li.className = 'result-item';
    
    resultado.appendChild(li);
    
    // Agregar efecto de animación (opcional)
    li.style.opacity = '0';
    li.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        li.style.transition = 'all 0.5s ease';
        li.style.opacity = '1';
        li.style.transform = 'translateY(0)';
    }, 100);
}

/**
 * Función para limpiar el resultado anterior
 */
function limpiarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}

/**
 * Función para manejar la tecla Enter en el campo de entrada
 */
function manejarTeclaEnter(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
}

// Agregar event listener para la tecla Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    inputAmigo.addEventListener('keypress', manejarTeclaEnter);
    
    // Enfocar el campo de entrada al cargar la página
    inputAmigo.focus();
});

// Función adicional para reiniciar la aplicación (opcional)
function reiniciarJuego() {
    amigos = [];
    actualizarLista();
    limpiarResultado();
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}