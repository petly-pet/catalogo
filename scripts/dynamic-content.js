// Función para cargar contenido dinámico
function loadContent(contentToLoad) {
    const url = `src/points/${contentToLoad}.html`; // Ruta al archivo HTML
    const dynamicContentDiv = document.getElementById('dynamic-content');

    // Fetch del archivo HTML
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            dynamicContentDiv.innerHTML = html; // Inyectar contenido en el div
        })
        .catch(error => {
            console.error('Error al cargar contenido:', error);
            dynamicContentDiv.innerHTML = `
                <p class="text-red-500 text-center">No se pudo cargar el contenido. Intente nuevamente.</p>
            `;
        });
}

// Cargar contenido predeterminado al iniciar
document.addEventListener('DOMContentLoaded', () => {
    loadContent('caninos'); // Cargar 'caninos' por defecto
});

// Configurar los enlaces del menú de navegación
document.querySelectorAll('.navbar-item').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar navegación predeterminada
        const contentToLoad = this.getAttribute('data-content'); // Obtener el valor de data-content
        loadContent(contentToLoad); // Cargar el contenido correspondiente
    });
});
