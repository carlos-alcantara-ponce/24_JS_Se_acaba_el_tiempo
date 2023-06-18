
const seconds_div = document.getElementById("seconds");
const minutes_div = document.getElementById("minutes");
const hours_div = document.getElementById("hour");

function getSecondsSinceStartOfDay() {
    var tot_seconds = new Date().getSeconds() + new Date().getMinutes() * 60 + new Date().getHours() * 3600;
    var tot_horas = new Date().getHours();
    var tot_minutos = new Date().getMinutes();
    tot_seconds = tot_seconds + tot_minutos * 60 + tot_horas * 3600;
    tot_seconds = tot_seconds % 60;


    // console.log("horas: " + tot_horas);
    // console.log("minutos: " + tot_minutos);
    // console.log("Segundos: " + tot_seconds);

    rotar_segundos(tot_seconds);
    rotar_minutos(tot_minutos);
    rotar_horas(tot_horas);

    return tot_seconds;
}

function rotar_segundos(tot_seconds) {

    var deg = 360 * tot_seconds / 60;
    deg = deg + 180;
    deg = deg % 360;

    // console.log("Degrees: " + deg);

    seconds_div.style.transform = "rotate(" + deg + "deg)";

}

function rotar_minutos(tot_minutos) {

    var deg = 360 * tot_minutos / 60;
    deg = deg + 180;
    deg = deg % 360;

    // console.log("Degrees: " + deg);

    minutes_div.style.transform = "rotate(" + deg + "deg)";

}


function rotar_horas(tot_horas) {

    var tot_horas_12 = tot_horas % 12;
    var deg = 360 * tot_horas_12 / 12;
    deg = deg + 180;
    deg = deg % 360;

    console.log("tot_horas: " + tot_horas);
    console.log("tot_horas_12: " + tot_horas_12);

    console.log("Degrees: " + deg);

    hours_div.style.transform = "rotate(" + deg + "deg)";

}





setInterval(function () {
    var time = getSecondsSinceStartOfDay();
    // console.log(time);
    // your code here
}, 1000);

