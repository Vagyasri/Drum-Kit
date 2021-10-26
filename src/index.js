import './style.css';

window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const note = document.querySelector(`.note[data-key='${e.keyCode}']`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  note.classList.add('play');
});

const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  console.log(e.propertyName);
};

const notes = document.querySelectorAll('.note');
notes.forEach(((note) => note.addEventListener('transitionend', removeTransition)));