function updateTime(){
//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format("dddd MMMM D YYYY");
losAngelesTimeElement.innerHTML = `${losAngelesTime.format("H:mm:ss")} <small>${losAngelesTime.format("A")}</small>`;


//Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisTime.format("dddd MMMM D YYYY");
parisTimeElement.innerHTML = `${parisTime.format("H:mm:ss")} <small>${parisTime.format("A")}</small>`;
}

updateTime();
setInterval(updateTime, 1000);