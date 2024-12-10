// Función para generar un color aleatorio que no sea rojo
function generarColorAleatorio() {
    let color;
    do {
      color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    } while (color.toLowerCase().startsWith("#ff")); // Evitar tonos rojos
    return color;
  }
  
  // Evento para agregar nombre
  document.getElementById('btnAgregarNombre').addEventListener('click', () => {
    // Crear un nuevo elemento <p>
    const nombreParrafo = document.createElement('p');
    nombreParrafo.textContent = 'Luis Velasquez - Carnet 24011341';
  
    // Agregar una clase para el formato
    nombreParrafo.classList.add('nombreResaltado');
  
    // Asignar un color de fondo aleatorio
    nombreParrafo.style.backgroundColor = generarColorAleatorio();
  
    // Insertar el nuevo elemento en el contenedor
    document.getElementById('contenedorNombres').appendChild(nombreParrafo);
  });
  
  // Evento para eliminar el último nombre agregado
  document.getElementById('btnEliminarNombre').addEventListener('click', () => {
    const contenedor = document.getElementById('contenedorNombres');
    if (contenedor.lastChild) {
      contenedor.removeChild(contenedor.lastChild);
    } else {
      alert('No hay más nombres para eliminar.');
    }
  });
  