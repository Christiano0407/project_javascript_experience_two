//** === ==================================== Video Part Two =================================== === */
//**! === ======= Variables ======= ===  */
const player = document.querySelector(`.player`);
const video = document.querySelector(`.viewer`);
const progress = document.querySelector(`.progress`);
const progressFilled = document.querySelector(`.progress__filled`);
const toggle = document.querySelector(`.toggle`);
const range = document.querySelectorAll(`.player__slider`);
const skipData = document.querySelectorAll(`[data-skip]`);

//**! === Functions ===  */
function videoOn() {
  const play = video.paused ? `play` : `pause`;
  video[play]();
}

function playOn() {
  const method = this.paused ? '►' : '❚ ❚';
  toggle.textContent = method;
}

function skipOn() {
  video.currentTime += parseFloat(this.dataset.skip);
  console.log(this.value);
}

function rangeOn() {
  //console.log(this.name);
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

//**! === Events & Methods ===  */
let mousedown = false;
player.addEventListener(`click`, videoOn);
video.addEventListener(`play`, playOn);
video.addEventListener(`pause`, playOn);
video.addEventListener(`timeupdate`, handleProgress);
skipData.forEach((item) => item.addEventListener(`click`, skipOn));
range.forEach((item) => item.addEventListener(`change`, rangeOn));
range.forEach((item) => item.addEventListener(`mousemove`, rangeOn));
progress.addEventListener(`click`, scrub);
progress.addEventListener(`mousemove`, (e) => mousedown && scrub(e));
progress.addEventListener(`mousedown`, () => (mousedown = true));
progress.addEventListener(`mouseup`, () => (mousedown = true));
