
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

//To avoid mixing our timer logic with the logic responsible for updating our border, we need a way of connecting our timer code with the outside world so we can communicate that key events have happened (time has started, paused, completed). We are going to do that through callback functions.

// 1. Constructor function needs to receive each callback.

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },

  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset', 
      (perimeter * timeRemaining) / duration - perimeter
    );
  }, 

  onComplete() {
    console.log('Timer is completed');
  }
});