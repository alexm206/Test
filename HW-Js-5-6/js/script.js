var timer = {

  timerBody: document.body,
  wrapper: document.createElement('div'),
  topic: document.createElement('p'),
  timerText: document.createElement('p'),
  buttonContainer: document.createElement('div'),
  buttonStart: document.createElement('button'),
  buttonSplit: document.createElement('button'),
  buttonReset: document.createElement('button'),
  warnings: document.createElement('div'),

  testForm: function (name, buttonStart, buttonSplit, buttonReset) {
    this.wrapper.classList.add('timer');
    this.wrapper.setAttribute('id', 'timer');
    this.topic.classList.add('timer__name');
    this.topic.innerHTML = name || 'Java Script Timer';
    this.timerText.classList.add('timer__text');
    this.timerText.innerHTML = '00:00:00:000';
    this.buttonContainer.classList.add('button-container');
    this.buttonStart.classList.add('timer__start');
    this.buttonStart.setAttribute('id', 'start');
    this.buttonStart.innerHTML = buttonStart || 'Start';
    this.buttonSplit.classList.add('timer__split');
    this.buttonSplit.setAttribute('id', 'split');
    this.buttonSplit.innerHTML = buttonSplit || 'Split';
    this.buttonReset.classList.add('timer__reset');
    this.buttonReset.setAttribute('id', 'reset');
    this.buttonReset.innerHTML = buttonReset || 'Reset';
    this.warnings.classList.add('timer-warnings');

    this.timerBody.appendChild(this.wrapper);
    this.wrapper.appendChild(this.topic);
    this.wrapper.appendChild(this.timerText);
    this.wrapper.appendChild(this.buttonContainer);
    this.buttonContainer.appendChild(this.buttonStart);
    this.buttonContainer.appendChild(this.buttonSplit);
    this.buttonContainer.appendChild(this.buttonReset);
    this.wrapper.appendChild(this.warnings);
  },
};
timer.testForm();

var ms = 0;
var sec = 0;
var min = 0;
var hrs = 0;
var counter = 0;
var splitCounter = 1;
var interval = null;
var buttonStart = timer.buttonStart;
var timerText = timer.timerText;
var warnings = timer.warnings;
timer.buttonStart.addEventListener('click', function () {
  if (buttonStart.innerHTML == 'Start') {
    buttonStart.innerHTML = 'Pause';
    buttonStart.className = 'timer__pause';
    interval = setInterval(function () {
      jstimer();
    }, 10);
  } else {
    buttonStart.innerHTML = 'Start';
    buttonStart.className = 'timer__start';
    clearInterval(interval);
    var stopWarning = document.createElement('p');
    stopWarning.innerHTML = 'Stopped at: ' + timerText.textContent;
    warnings.appendChild(stopWarning);
  }
});

timer.buttonSplit.addEventListener('click', function() {
    if(timerText.textContent != '00:00:00.000') {
        var splitWarning = document.createElement('p');
        splitWarning.innerHTML = splitCounter +' memo: ' + timerText.textContent;
        warnings.appendChild(splitWarning);
        splitCounter++;
    }
});

timer.buttonReset.addEventListener('click', function() {
    clearInterval(interval);
    timerText.innerHTML = '00:00:00.000';
    warnings.innerHTML = '';
    ms = sec = min = hrs = counter = 0;
    buttonStart.innerHTML = 'Start';
    buttonStart.className = 'timer__start';
    splitCounter = 1;
});

function jstimer() {
    var time = new Date().getTime();
    counter += 11;
    ms = time - (time - counter);

    if(ms > 999 - 11) {
        counter = 0;
        sec += 1;
    }
    if(sec > 59) {
        sec = 0;
        min += 1;
    }
    if(min > 59) {
        min = 0;
        hrs += 1;
    }
    if(hrs == 24) {
        ms = 0;
        sec = 0;
        min = 0;
        hrs = 0;
    }
    if(hrs<10) {
      var displayHrs = '0' + hrs;
    } else {
      displayHrs = hrs;
    }
    if(min<10) {
      var displayMin = '0' + min;
    } else {
      displayMin = min;
    }
    if(sec<10) {
      var displaySec = '0' + sec;
    } else {
      displaySec = sec;
    }
    if(ms<10) {
      var displayMs = '00' + ms;
    } else if(ms<100&&ms>10){
      displayMs = '0' + ms;
    } else {
      displayMs = ms;
    }

    timerText.innerHTML = displayHrs + ":" + displayMin + ":" + displaySec + "." + displayMs;
}
