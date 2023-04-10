//** === ======================= Video Player === ==================== */
//**! === Get Elements  */
const player = document.querySelector(`.player`);
const video = player.querySelector(`.viewer`);
const progress = player.querySelector(`.progress`);
const progressBar = player.querySelector(`.progress__filled`);
const toggle = player.querySelector(`.toggle`);
const playerButtons = document.querySelectorAll(`.player__button`);
const skipButtons = document.querySelectorAll(`[data-skip]`);
const range = document.querySelectorAll(`.player__slider`);

//**! === Build Functions === */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  /* if (video.paused) {
    video.play();
  } else {
    video.pause();
  } */
}

function updateButton() {
  const playIcon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = playIcon;
  // console.log('Update');
}

function skipOn() {
  //console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function rangeOn() {
  video[this.name] = this.value;
  /*  console.log(this.name);
  console.log(this.value); */
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  //console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

//**! === Events & Methods === */
video.addEventListener(`click`, togglePlay);
video.addEventListener(`play`, updateButton);
video.addEventListener(`pause`, updateButton);
video.addEventListener(`timeupdate`, handleProgress);
toggle.addEventListener(`click`, togglePlay);
skipButtons.forEach((btn) => btn.addEventListener(`click`, skipOn));
range.forEach((item) => item.addEventListener(`change`, rangeOn));
range.forEach((item) => item.addEventListener(`mousemove`, rangeOn));
let mousedown = false;
progress.addEventListener(`click`, scrub);
progress.addEventListener(`mousemove`, (e) => mousedown && scrub(e));
progress.addEventListener(`mousedown`, () => (mousedown = true));
progress.addEventListener(`mouseup`, () => (mousedown = false));
