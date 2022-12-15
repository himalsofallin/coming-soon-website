function countdown() {
    // Grabing the HTML Elements of Countdown
    const dayEl = document.getElementById("day");
    const hourEl = document.getElementById("hour");
    const minuteEl = document.getElementById("minute");
    const secondEl = document.getElementById("second");

    // Selecting a date to launch and calc the diff between the launch date and the current time
    const launchDate = Date.parse("jan 1, 2030 10:20:00");
    const currentTime = new Date();

    const diff = launchDate - currentTime;

    // Converting the diff to days, hours, minutes and seconds using Math.floot(), because this function return interger number

    // Conversion Concept
    // 1 Second = 1000 miliseconds, so (diff / 1000)
    // 1 Minute = 60 seconds, so (diff / (1000 * 60))
    // 1 Hour = 60 minutes, so (diff / (1000 * 60 * 60))
    // 1 Day = 24 hours (diff, so / (1000 * 60 * 60 * 24))

    const second = Math.floor(diff / 1000);
    const minute = Math.floor(diff / (1000 * 60));
    const hour = Math.floor(diff / (1000 * 60 * 60));
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));

    //Countdown
    const cleanDay = day;
    const cleanHour = hour - day * 24;
    const cleanMinute = minute - hour * 60;
    const cleanSecond = second - minute * 60;

    // Throwing the information into HTML
    dayEl.innerHTML = formatTimeZero(cleanDay);
    hourEl.innerHTML = formatTimeZero(cleanHour);
    minuteEl.innerHTML = formatTimeZero(cleanMinute);
    secondEl.innerHTML = formatTimeZero(cleanSecond);

}

//Function to Add 0 into timer
function formatTimeZero(time) {
    if (time < 10) {
       return time = `0${time}`;
    } else {
        return time
    }
}

// Reload the countdown each 1 second
setInterval('countdown()', 1000);
