const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-26.19&lon=28.02&appid=6f7485277746b0ae1a06c3ffc7583e18&units=imperial'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch(url);

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('width', '5')
    weatherIcon.setAttribute('height', '5')
    captionDesc.textContent = `${desc}`
}



const currentDate = new Date();
document.querySelector("#year").textContent = currentDate.getFullYear();

let oLastModif = new Date(document.lastModified);
document.querySelector("#modified").textContent = oLastModif;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("☑️")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "❎";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "☑️";
    }
});

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

visitsDisplay.textContent = numVisits;

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
