// Seleccionar los elementos interactivos
const links = document.querySelectorAll('.tab-link');
const contentDiv = document.getElementById('content');
const searchBar = document.getElementById('search-bar');

// Función para cargar contenido desde un archivo HTML
const loadContent = (file) => {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Error al cargar ${file}`);
            return response.text();
        })
        .then(html => {
            contentDiv.innerHTML = html;
        })
        .catch(error => {
            contentDiv.innerHTML = `<p class="text-red-500">No se pudo cargar el contenido: ${error.message}</p>`;
        });
};

// Añadir evento de clic a cada enlace
links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        // Eliminar clases activas de todos los enlaces
        links.forEach(link => link.classList.remove('text-blue-600', 'bg-gray-100'));

        // Añadir clases activas al enlace seleccionado
        this.classList.add('text-blue-600', 'bg-gray-100');

        // Cargar el archivo HTML correspondiente
        const file = this.dataset.file;
        loadContent(file);
    });
});

// Función para buscar texto dentro del contenido dinámico
const searchContent = () => {
    const query = searchBar.value.toLowerCase(); // Obtiene el texto del campo de búsqueda
    const rows = document.querySelectorAll('tbody tr'); // Selecciona todas las filas del cuerpo de la tabla

    rows.forEach(row => {
        const text = row.textContent.toLowerCase(); // Obtén todo el texto de la fila
        // Si el campo de búsqueda está vacío, muestra todas las filas
        row.style.display = query === '' || text.includes(query) ? '' : 'none';
    });
};

// Añadir evento para buscar mientras se escribe
searchBar.addEventListener('input', function () {
    searchContent(); // Llama a la función de búsqueda cada vez que el usuario escribe
});



// Cargar contenido inicial (Caninos)
loadContent('caninos.html');

