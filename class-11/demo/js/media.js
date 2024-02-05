'use strict';

let audioEl = document.getElementById('audio');
let videoEl = document.getElementById('video');
let buttonEl = document.getElementById('start');
let isPlaying = false;

// play both media on button click!
buttonEl.addEventListener('click', function() {
  // callback function!! -> a functions that is invoked by another thing.

  if (isPlaying) {
    isPlaying = false;
    videoEl.pause();
    audioEl.pause();
  } else {
    isPlaying = true;
    videoEl.play();
    audioEl.play();
  }
});