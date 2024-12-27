const navbarItems = document.querySelectorAll('.navbar-item');

navbarItems.forEach(item => {
    item.addEventListener('click', () => {
        // Desactivar todos los elementos
        navbarItems.forEach(navItem => {
            navItem.classList.remove(navItem.dataset.color.split(" ")[0]);
            navItem.classList.remove(navItem.dataset.color.split(" ")[1]);
        });

        // Activar el elemento seleccionado
        item.classList.add(item.dataset.color.split(" ")[0]);
        item.classList.add(item.dataset.color.split(" ")[1]);
    });
});