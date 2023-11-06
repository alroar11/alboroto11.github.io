document.addEventListener('DOMContentLoaded', function() {
  const publicacionForm = document.getElementById('publicacion-form');
  const publicacionContent = document.getElementById('publicacion-content');
  const publicacionesContainer = document.getElementById('publicaciones-container');

  publicacionForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const content = publicacionContent.value;

    if (content.trim() !== '') {
      const publicacionElement = document.createElement('div');
      publicacionElement.className = 'publicacion';
      publicacionElement.innerHTML = `
        <p>${content}</p>
        <p class="vistas">Vistas: <span>0</span></p>
      `;

      publicacionesContainer.prepend(publicacionElement);

      publicacionContent.value = '';

      // Incrementar el contador de vistas al hacer clic en la publicación
      publicacionElement.addEventListener('click', function() {
        const vistasElement = publicacionElement.querySelector('.vistas span');
        const vistas = parseInt(vistasElement.textContent);
        vistasElement.textContent = vistas + 1;
      });
    }
  });
});