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
    const query = searchBar.value.toLowerCase().trim(); // Texto del campo de búsqueda
    const rows = document.querySelectorAll('tbody tr'); // Seleccionar filas de la tabla
    const groups = document.querySelectorAll('tbody th[colspan]'); // Seleccionar encabezados de grupo

    // Ocultar todas las filas y encabezados
    rows.forEach(row => (row.style.display = 'none'));
    groups.forEach(group => (group.style.display = 'none'));

    // Verificar si hay coincidencias en las filas
    rows.forEach(row => {
        const text = row.textContent.toLowerCase(); // Texto completo de la fila
        if (text.includes(query)) {
            row.style.display = ''; // Mostrar fila

            // Mostrar el encabezado del grupo correspondiente
            const groupId = row.getAttribute('data-group'); // Obtener grupo de la fila
            const groupHeader = document.getElementById(groupId); // Buscar el encabezado del grupo
            if (groupHeader) {
                groupHeader.style.display = ''; // Mostrar encabezado del grupo
            }
        }
    });
};

// Evento para buscar al presionar Enter
searchBar.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evitar el envío de formularios
        searchContent(); // Llamar la función de búsqueda
    }
});

// Cargar contenido inicial (Caninos)
loadContent('caninos.html');

