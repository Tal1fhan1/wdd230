let oLastModif = new Date(document.lastModified);
document.querySelector("#modified").textContent = oLastModif;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const msToDays = 84600000;

const theDateToday = new Date();
const milliseconds = theDateToday.getTime()
document.querySelector("#time").textContent = theDateToday

const message1 = "Welcome! Let us know if you have any questions."

let lastVisit = window.localStorage.getItem("lastVisit")

if (lastVisit === null) {
    document.querySelector("#visited").textContent = message1;
    window.localStorage.setItem("lastVisit", milliseconds)
} else {
    window.localStorage.setItem("lastVisit", milliseconds)
    let dayDifference = theDateToday.getTime() - lastVisit;
    const conversion = dayDifference / msToDays
    console.log(conversion)
    if (conversion < 1) {
        const message2 = "Back so soon! Awesome!";
        document.querySelector('#visited').textContent = message2;
    }
    else if (Math.round(conversion) == 1) {
        const message3 = "You last visited " + Math.round(conversion).toString() + " day ago";
        document.querySelector('#visited').textContent = message3;
    }
    else {
        const message4 = "You last visited " + Math.round(conversion).toString() + " days ago";
        document.querySelector('#visited').textContent = message4;
    }
}



