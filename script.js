const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

countDown();

setInterval(countDown,1000);

function countDown() {
  const currentDate = new Date();
  const newYearsDate = new Date("January 01, 2023 00:00:00");

  //JS timestamps are actually measured in milliseconds
  // get total seconds between the times
  var delta = Math.abs(newYearsDate - currentDate) / 1000;

  // calculate (and subtract) whole days
  var days = Math.floor(delta / (24*60*60)); 
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) ;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) ;
  delta -= minutes * 60;

  // what's left is seconds
  var seconds = Math.floor(delta) ; // in theory the modulus is not required

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours ;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;

  // console.log(days, hours, minutes, Math.floor(seconds) );
}




