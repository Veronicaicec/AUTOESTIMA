// Funcionalidad de comentarios
document.getElementById('comentario-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;

    // Crear el nuevo comentario
    const comentarioDiv = document.createElement('div');
    comentarioDiv.classList.add('comentario');
    comentarioDiv.innerHTML = `<strong>${nombre}</strong>: <p>${comentario}</p>`;

    // Agregar el comentario a la lista
    document.getElementById('comentarios-lista').appendChild(comentarioDiv);

    // Limpiar el formulario
    document.getElementById('nombre').value = '';
    document.getElementById('comentario').value = '';
});
