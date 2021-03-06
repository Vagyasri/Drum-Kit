import './style.css';

const notes = document.querySelectorAll('.note');

const addTransition = (e) => {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const note = document.querySelector(`.note[data-key='${e.keyCode}']`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  note.classList.add('play');
};

const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('play');
};

window.addEventListener('keydown', addTransition);

notes.forEach((note) => note.addEventListener('transitionend', removeTransition));
