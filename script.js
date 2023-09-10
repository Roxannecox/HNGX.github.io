const currentDate = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDateIndex = currentDate.getDay();

const currentDayOfTheWeek = daysOfWeek[currentDateIndex];
document.getElementById("day").innerHTML = currentDayOfTheWeek;

const isoString = currentDate.toISOString();
const currentUTCTime = currentDate.getTime();
document.getElementById("time").innerHTML = isoString;
