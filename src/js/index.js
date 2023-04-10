//** === Video Player === */
const player = document.getElementById(`idPlayer`);
const Video = player.querySelector(`.viewer`);
const progress = player.querySelector(`.progress`);
const progressBar = player.querySelector(`.progress__filled`);
const toggle = player.querySelector(`.toggle`);
const playerButtons = document.querySelectorAll(`.player__button`);
const skipButtons = document.querySelectorAll(`[data-skip]`);
const rangeSlider = document.querySelectorAll(`.player__slider`);
