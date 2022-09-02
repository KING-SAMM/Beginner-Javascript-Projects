
function displayTime() {
    // Get hours, minutes and seconds from the Date() object and store them in variables
    const date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = document.getElementById('session');

    // AM PM Display 
    if (hrs >= 12) {
        session.innerHTML = 'PM'
    } else {
        session.innerHTML = 'AM'
    }

    // 12 hours format
    if (hrs > 12) {
        hrs = hrs - 12
    }

    // Display hrs, min, and sec in the browser
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

// Display the time every 10ms (0.01 s)
setInterval(displayTime, 10);