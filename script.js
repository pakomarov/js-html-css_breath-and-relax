const TOTAL_TIME = 7500;


const container = document.querySelector('.container');
const pointerContainer = document.querySelector('.pointer-container');
const text = document.querySelector('#text');


function breatheAnimation () {
  text.innerText = 'Breath In!';
  container.classList.remove('shrink');
  container.classList.add('grow');

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.classList.remove('grow');
      container.classList.add('shrink');
    }, holdTime);
  }, breatheTime);
}


const breatheTime = (TOTAL_TIME / 5) * 2;
const holdTime = TOTAL_TIME / 5;

const containerClickHandler = () => {
  pointerContainer.classList.add('rotate');
  breatheAnimation();
  setInterval(breatheAnimation, TOTAL_TIME);
  container.removeEventListener('click', containerClickHandler);
};
container.addEventListener('click', containerClickHandler);
