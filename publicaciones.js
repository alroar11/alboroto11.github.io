document.addEventListener('DOMContentLoaded', function() {
    const publicacionForm = document.getElementById('publicacion-form');
    const publicacionContent = document.getElementById('publicacion-content');
    const publicacionImagen = document.getElementById('publicacion-imagen');
    const publicacionAudio = document.getElementById('publicacion-audio');
    const publicacionVideo = document.getElementById('publicacion-video');
    const publicacionesContainer = document.getElementById('publicaciones-container');
  
    publicacionForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const content = publicacionContent.value;
      const imagenFile = publicacionImagen.files[0];
      const audioFile = publicacionAudio.files[0];
      const videoFile = publicacionVideo.files[0];
  
      if (content.trim() !== '') {
        const publicacionElement = document.createElement('div');
        publicacionElement.className = 'publicacion';
  
        let mediaContent = '';
  
        if (imagenFile) {
          mediaContent += `<img src="${URL.createObjectURL(imagenFile)}" alt="Imagen">`;
        }
  
        if (audioFile) {
          mediaContent += `<audio controls><source src="${URL.createObjectURL(audioFile)}" type="audio/mpeg"></audio>`;
        }
  
        if (videoFile) {
          mediaContent += `<video controls><source src="${URL.createObjectURL(videoFile)}" type="video/mp4"></video>`;
        }
  
        publicacionElement.innerHTML = `
          <p>${content}</p>
          ${mediaContent}
          <p class="vistas">Vistas: <span>0</span></p>
        `;
  
        publicacionesContainer.prepend(publicacionElement);
  
        publicacionContent.value = '';
        publicacionImagen.value = '';
        publicacionAudio.value = '';
        publicacionVideo.value = '';
  
        // Incrementar el contador de vistas al hacer clic en la publicación
        publicacionElement.addEventListener('click', function() {
          const vistasElement = publicacionElement.querySelector('.vistas span');
          const vistas = parseInt(vistasElement.textContent);
          vistasElement.textContent = vistas + 1;
        });
      }
    });
  });