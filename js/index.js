function updateTime() {
  let losAngelesId = document.querySelector("#los-angeles");
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

  let sydneyId = document.querySelector("#sydney");
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


  let tokyoId = document.querySelector("#tokyo");
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
setInterval(updateTime, 1000);

updateTime();
