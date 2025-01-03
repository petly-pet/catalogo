// Seleccionar los elementos interactivos
const links = document.querySelectorAll('.tab-link');
const contentDiv = document.getElementById('content');

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
        links.forEach(link => link.classList.remove('text-blue-600', 'bg-gray-100', 'dark:bg-gray-800', 'dark:text-blue-500'));

        // Añadir clases activas al enlace seleccionado
        this.classList.add('text-blue-600', 'bg-gray-100', 'dark:bg-gray-800', 'dark:text-blue-500');

        // Cargar el archivo HTML correspondiente
        const file = this.dataset.file;
        loadContent(file);
    });
});

// Cargar contenido inicial (Caninos)
loadContent('caninos.html');