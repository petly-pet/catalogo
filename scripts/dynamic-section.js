document.getElementById('select-dogs').addEventListener('change', function () {
    const selectedFile = this.value; // Obtén el valor de la opción seleccionada
    const contentDiv = document.getElementById('content-dogs');

    // Verifica que haya una opción válida seleccionada
    if (selectedFile) {
        fetch(selectedFile)
            .then(response => {
                if (!response.ok) throw new Error('No se pudo cargar el archivo');
                return response.text();
            })
            .then(html => {
                contentDiv.innerHTML = html; // Inyecta el contenido HTML cargado
            })
            .catch(error => {
                contentDiv.innerHTML = `<p class="text-red-500">Error al cargar el contenido: ${error.message}</p>`;
            });
    }
});