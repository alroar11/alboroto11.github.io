// Variable para almacenar los talleres registrados
let talleres = [];

// Función para registrar un nuevo taller
function registrarTaller(event) {
  event.preventDefault();

  const nombreTaller = document.getElementById('nombreTaller').value;
  const lugarTaller = document.getElementById('lugarTaller').value;
  const fechaTaller = document.getElementById('fechaTaller').value;

  // Validar que se ingresen todos los campos
  if (nombreTaller && lugarTaller && fechaTaller) {
    const nuevoTaller = {
      nombre: nombreTaller,
      lugar: lugarTaller,
      fecha: fechaTaller,
      participantes: [] // Array para almacenar los participantes registrados en el taller
    };

    // Agregar el nuevo taller a la lista de talleres
    talleres.push(nuevoTaller);

    // Actualizar la lista de talleres en el HTML
    actualizarTalleres();

    // Limpiar los campos del formulario
    document.getElementById('nombreTaller').value = '';
    document.getElementById('lugarTaller').value = '';
    document.getElementById('fechaTaller').value = '';
  } else {
    alert('Por favor, ingresa todos los campos del taller.');
  }
}

// Función para registrar un participante en un taller
function registrarParticipante(nombreTaller) {
  const nombreAsistente = prompt('Ingrese el nombre del participante:');

  // Validar que se ingrese un nombre
  if (nombreAsistente) {
    // Buscar el taller correspondiente al nombre
    const taller = talleres.find((taller) => taller.nombre === nombreTaller);

    if (taller) {
      // Agregar el participante al array de participantes del taller
      taller.participantes.push(nombreAsistente);

      // Actualizar la lista de talleres en el HTML
      actualizarTalleres();
    } else {
      alert('No se encontró el taller especificado');
    }
  }
}

// Función para actualizar la lista de talleres en el HTML
function actualizarTalleres() {
  const talleresContainer = document.getElementById('talleresContainer');
  talleresContainer.innerHTML = '';

  // Recorrer la lista de talleres y crear elementos HTML para mostrarlos
  talleres.forEach((taller) => {
    const tallerElement = document.createElement('div');
    tallerElement.classList.add('taller');
    tallerElement.innerHTML = `
      <h3>${taller.nombre}</h3>
      <p><strong>Lugar:</strong> ${taller.lugar}</p>
      <p><strong>Fecha:</strong> ${taller.fecha}</p>
      <h4>Participantes:</h4>
      <ul>
        ${taller.participantes.map(participante => `<li>${participante}</li>`).join('')}
      </ul>
      <button onclick="registrarParticipante('${taller.nombre}')">Registrar Participante</button>
    `;

    talleresContainer.appendChild(tallerElement);
  });
}

// Event listener para el formulario de registro de talleres
document.getElementById('registroForm').addEventListener('submit', registrarTaller);

// Inicializar la lista de talleres en el HTML
actualizarTalleres();