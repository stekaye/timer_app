class Timer {
  constructor (durationInput, startButton, pauseButton) {
    //This enables other methods to use them.
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    //automatically set up event listener on each new timer instance for whatever is defined as the start button.
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  //Define start method with an arroq function. This will ensure that the value of this is equal to Timer. Otherwise, it would refer to the button. Option two would be to add .bind(this) after this.start above.
  start = () => {
    this.tick();
    //When we call setInterval we get back something called a timer(an ID). We assign it to an instance variable (THIS enables us to share information between different methods). To stop the interval, we later call clearInterval(id);
    this.interval = setInterval(this.tick, 1000);
  }

  tick = () => {
    console.log('tick')
  }

  pause = () => {
    clearInterval(this.interval);
  }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);