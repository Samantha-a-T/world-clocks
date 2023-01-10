function updateTime() {
  let losAngelesId = document.querySelector("#los-angeles");
  if (losAngelesId) {
    let losAngelesDateElement = losAngelesId.querySelector(".date");
    let losAngelesTimeElement = losAngelesId.querySelector(".time");
    losAngelesDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do, YYYY");
    losAngelesTimeElement.innerHTML = `${moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss")} <span class="time-indicator"> ${moment()
      .tz("America/Los_Angeles")
      .format("A")}</span>`;
  }
  let sydneyId = document.querySelector("#sydney");
  if (sydneyId) {
    let sydneyDateElement = sydneyId.querySelector(".date");
    let sydneyTimeElement = sydneyId.querySelector(".time");
    sydneyDateElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("MMMM Do, YYYY");
    sydneyTimeElement.innerHTML = `${moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss")} <span class="time-indicator"> ${moment()
      .tz("Australia/Sydney")
      .format("A")}</span>`;
  }

    let tokyoId = document.querySelector("#tokyo");
      if (tokyoId) {
    let tokyoDateElement = tokyoId.querySelector(".date");
    let tokyoTimeElement = tokyoId.querySelector(".time");
    tokyoDateElement.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("MMMM Do, YYYY");
    tokyoTimeElement.innerHTML = `${moment()
      .tz("Asia/Tokyo")
      .format("h:mm:ss")} <span class="time-indicator"> ${moment()
      .tz("Asia/Tokyo")
      .format("A")}</span>`;
  }
}

function updateCity(event) {
  let updatedTimeZone = event.target.value;
  let cityName = updatedTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(updatedTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <span class="time-indicator"> ${cityTime.format("A")}
    </span></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
