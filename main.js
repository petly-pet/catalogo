/**
 * Cargar una sección dinámica desde un archivo HTML.
 * @param {string} sectionName - Nombre de la sección a cargar.
 */
async function showSection(sectionName) {
    const sectionContainer = document.getElementById("sectionContainer");
    const sectionFile = `src/sections/${sectionName.toLowerCase()}.html`;

    try {
        const response = await fetch(sectionFile);
        if (response.ok) {
            const content = await response.text();
            sectionContainer.innerHTML = content;
        } else {
            sectionContainer.innerHTML = `<p class="text-red-500 text-center">Error: No se pudo cargar la sección ${sectionName}.</p>`;
        }
    } catch (error) {
        sectionContainer.innerHTML = `<p class="text-red-500 text-center">Error de red al intentar cargar la sección.</p>`;
        console.error(`Error al cargar ${sectionFile}:`, error);
    }
}


function updatePrice(productId, originalPrice, price) {
    const originalPriceElement = document.getElementById(`original-price-${productId}`);
    const priceElement = document.getElementById(`price-${productId}`);

    originalPriceElement.textContent = `$${originalPrice.toFixed(3)}`;
    priceElement.textContent = `$${price.toFixed(3)}`;
}

