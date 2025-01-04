// Seleccionar los elementos
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const deliveryModal = document.getElementById('deliveryModal');

// Abrir el modal
openModalBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar comportamiento por defecto del enlace
    deliveryModal.classList.remove('hidden');
});

// Cerrar el modal
closeModalBtn.addEventListener('click', () => {
    deliveryModal.classList.add('hidden');
});

// Cerrar el modal al hacer clic fuera de él
deliveryModal.addEventListener('click', (e) => {
    if (e.target === deliveryModal) {
        deliveryModal.classList.add('hidden');
    }
});