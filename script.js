document.addEventListener('DOMContentLoaded', function() {
    // Función para cambiar entre modo claro y oscuro
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        
        // Cambiar el icono del botón
        const icon = darkModeToggle.querySelector('i');
        icon.classList.toggle('bi-moon');
        icon.classList.toggle('bi-sun');
    }

    // Botón para cambiar el modo
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Verificar si el modo oscuro estaba activado anteriormente
    if (localStorage.getItem('darkMode') === 'true') {
        toggleDarkMode();
    }

    // Manejar el envío del formulario
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            contactForm.reset();
        });
    }

    // Añadir efecto hover a las imágenes del portafolio
    const portfolioImages = document.querySelectorAll('#portafolio img');
    portfolioImages.forEach(img => {
        img.classList.add('hover-effect');
    });
});

// Función para mostrar un modal
function showModal(title, message) {
    const modalHtml = `
        <div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="infoModalLabel">${title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ${message}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('infoModal'));
    modal.show();
}

