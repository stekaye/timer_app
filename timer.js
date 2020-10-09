class Timer {
  constructor (durationInput, startButton, pauseButton, callbacks) {
    //This enables other methods to use them.
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    //Using if statement here ensures that callbacks are optional.
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onPause = callbacks.onComplete;
    } 

    //automatically set up event listener on each new timer instance for whatever is defined as the start button.
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  //Define start method with an arroq function. This will ensure that the value of this is equal to Timer. Otherwise, it would refer to the button. Option two would be to add .bind(this) after this.start above.
  start = () => {
    //Check first to see if there is an onStart callback.
    if (this.onStart) {
      //Communicates that timer has started to outside world!
      this.onStart();
    }

    this.tick();
    //When we call setInterval we get back something called a timer(an ID). We assign it to an instance variable (THIS enables us to share information between different methods). To stop the interval, we later call clearInterval(id);
    this.interval = setInterval(this.tick, 1000);
  }

  pause = () => {
    clearInterval(this.interval);
  }

  tick = () => {
    //Getters and setters allow you to use them like variables, without needing the function parentheses. Add logic to stop timer if time reaches 0 so it does not continue to negative.
    
    if (this.timeRemaining <= 0) {
      this.pause
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 1;
      if (this.onTick) {
        this.onTick();
      }
    }
  }

  //Use getter/setter to easily access/change time remaining.
  get timeRemaining() {
    //Saves us having to write this numerous times.
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
  
}