function updateTime(){
    //Los Angeles
    let losAngelesElement = document.querySelector("#los-angeles");
    if(losAngelesElement){
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");
        let losAngelesTime = moment().tz("America/Los_Angeles");
        losAngelesDateElement.innerHTML = losAngelesTime.format("dddd MMMM D YYYY");
        losAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss")} <small>${losAngelesTime.format("A")}</small>`;
    }

    //Paris
    let parisElement = document.querySelector("#paris");
    if(parisElement){
        let parisDateElement = parisElement.querySelector(".date");
        let parisTimeElement = parisElement.querySelector(".time");
        let parisTime = moment().tz("Europe/Paris");
        parisDateElement.innerHTML = parisTime.format("dddd MMMM D YYYY");
        parisTimeElement.innerHTML = `${parisTime.format("h:mm:ss")} <small>${parisTime.format("A")}</small>`;
    }
}

function changeCity(event){
    setInterval(function(){
    let cityTimeZone = event.target.value;
    if(cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector(".cities");
    
    citiesElement.innerHTML = `
        <div class="city">
        <div>
            <h2>
                ${cityName}
            </h2>
            <div class="date">
                ${cityTime.format("dddd MMMM D YYYY")}
            </div>
        </div>
            <div class="time">
                ${cityTime.format("h:mm:ss")}
                <small>${cityTime.format("A")}</small>
            </div>
        </div>
        <a href="/">All cities</a>
    `;
},1000)
}

updateTime();
setInterval(updateTime, 1000);

let citySelectorElement = document.querySelector("#city-selector");
citySelectorElement.addEventListener("change", changeCity);