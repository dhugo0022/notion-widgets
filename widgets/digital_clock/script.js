function parseDarkThemeParam() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const darkTheme = urlParams.get('darkTheme') === "true";

  return darkTheme;
}

function applyDarkTheme(darkTheme) {
  const watchElement = findWatchElement();
  watchElement.style.color = "#FFF";
  watchElement.style.borderColor = "#FFF";
}

function checkDarkThemeAppliance() {
  const datkTheme = parseDarkThemeParam();
  if (datkTheme === false) {
    return;
  }

  applyDarkTheme(datkTheme);
}


// checks for dark theme
checkDarkThemeAppliance()

function parseWidthParam() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const width = urlParams.get('width');

  return width;
}

function findWatchElement() {
  const watchElement = document.getElementsByClassName("watch")[0];
  return watchElement;
}

function changeWatchWidth(width) {
  const watchElement = findWatchElement();
  watchElement.style.width = width;
}

function checkWidthChange() {
  const width = parseWidthParam();
  if (width === null) {
    return;
  }

  changeWatchWidth(width);
}

// checks for the need of a width change
checkWidthChange();

function getCurrentTime() {
  const date = new Date();
  return date;
}

function parseInternationalParam() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const isInternational = urlParams.get('international') === 'true';

  return isInternational;
}

function parsePreciseParam() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const isPrecise = urlParams.get('precise') === 'true';

  return isPrecise;
}

function findTimeElement() {
  const timeElement = document.getElementsByClassName("time")[0];
  return timeElement;
}

function buildTimeString(date, isInternational, isPrecise) {
  let timeString = "";

  const hours = isInternational ? date.getHours() : date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  timeString += `${hours < 10 ? `0${hours}` : hours}`;
  timeString += `:${minutes < 10 ? `0${minutes}` : minutes}`;

  if (isPrecise) {
    timeString += `:${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  if (!isInternational) {
    timeString += ` ${date.getHours() < 12 ? "AM" : "PM"}`;
  }

  return timeString;
}

function updateClock(isInternational, isPrecise) {
  const date = getCurrentTime();
  const timeString = buildTimeString(date, isInternational, isPrecise);
  const timeElement = findTimeElement();

  timeElement.innerHTML = timeString;
}

function startClockUpdate() {
  const isInternational = parseInternationalParam();
  const isPrecise = parsePreciseParam();

  updateClock(isInternational, isPrecise); // First update
  
  setInterval(() => {
    updateClock(isInternational, isPrecise);
  }, 1000);
}

// starts the clock update
startClockUpdate();