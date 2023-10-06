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

const password1 = document.querySelector("#pass");
const password2 = document.querySelector("#pwd");
const message = document.querySelector("#formmessage");

password2.addEventListener("focusout", checkSame);

function checkSame() {
    if (password1.value !== password2.value) {
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.style.visibility = "show";
        password2.style.backgroundColor = "#fff0f3";
        password2.value = "";
        password1.value = "";
        password1.focus();
    } else {
        message.style.display = "none";
        password2.style.backgroundColor = "#fff";
        password2.style.color = "#000";
    }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}