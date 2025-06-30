// galeria
function mostrarCategoria(categoria) {
  const secciones = document.querySelectorAll('.galeria');
  secciones.forEach(sec => sec.classList.add('oculto'));

  const seleccionada = document.getElementById(categoria);
  if (seleccionada) {
    seleccionada.classList.remove('oculto');
  }
}

// audio
const audio = document.getElementById('miAudio');
const container = document.querySelector('.audio-container');

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    container.classList.remove('play');
    container.classList.add('pause');
  } else {
    audio.pause();
    container.classList.remove('pause');
    container.classList.add('play');
  }
}
