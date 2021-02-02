var minute = 00
var second = 00
var miliseconds = 00
var minuteofDiplay = document.getElementById("min")
var SecondofDiplay = document.getElementById("sec")
var milisecondsofDiplay = document.getElementById("milisec")

var intervel;

function myFunc() {
    miliseconds++
    milisecondsofDiplay.innerHTML = miliseconds
    if (miliseconds === 100) {
        second++
        SecondofDiplay.innerHTML = second
        miliseconds = 0
    } else if (second === 60) {
        minute++
        minuteofDiplay.innerHTML = minute
        second = 0
    }
}

function start() {
    intervel = setInterval(myFunc, 10);
    document.getElementById("btn").style.display = "none"
}
function pause() {
    clearInterval(intervel)
    document.getElementById("btn").style.display = ""
}
function reset() {
    var minute = 0
    var second = 0
    var miliseconds = 0
    minuteofDiplay.innerHTML = minute
    SecondofDiplay.innerHTML = second
    milisecondsofDiplay.innerHTML = miliseconds
    pause()
}