//Alarm
//Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
//Result example: "Time for bed after 10 seconds".

function setAlarm() {
    const seconds = parseInt(prompt("Enter the number of seconds for the alarm:"));
    const message = prompt("Enter the message for the alarm:");

    setTimeout(() => {
        console.log(message);
    }, seconds * 1000);
}

setAlarm();
