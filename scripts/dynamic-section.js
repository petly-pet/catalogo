// Función para cargar contenido dinámico
function loadContent(contentToLoad) {
    const url = `src/points/${contentToLoad}.html`; // Ruta al archivo HTML

    // Cargar el archivo HTML correspondiente
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Error al cargar el contenido');
            return response.text();
        })
        .then(html => {
            document.getElementById('dynamic-content').innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
}

// Cargar contenido predeterminado (inicio.html)
document.addEventListener('DOMContentLoaded', () => {
    loadContent('iii');
});

// Configurar los enlaces del menú de navegación
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar la acción predeterminada del enlace
        const contentToLoad = this.getAttribute('data-content'); // Obtener el atributo data-content
        loadContent(contentToLoad);
    });
});
