const membersURL = "https://tal1fhan1.github.io/wdd230/chamber/data/members.json";

async function getMembers(membersURL) {
    const response = await fetch(membersURL);
    const data = await response.json();
    console.log(data.members[0]);
    displayMembers(data.members[0]);
}

getMembers(membersURL);


const displayMembers = () => {
    members.forEach((member) => {

        // let logo1 = document.createElement('img');
        let section = document.getElementById('company');
        let name1 = document.createElement('h3');
        name1.textContent = 'hi there';
        section.appendChild(name1);
        console.log(name1)
        // let address1 = document.createElement('p');
        // let phone1 = document.createElement('p');
        // let website1 = document.createElement('p');
        // let membership1 = document.createElement('p');

        // logo1.setAttribute = ('src', `${member.logo}`);


        // address1.textContent = `${member.members[0].company[0].address}`;
        // phone1.textContent = `${member.members[0].company[0].phone}`;
        // website1.textContent = `${member.members[0].company[0].website}`;
        // website1.setAttribute = ('href', `${member.members[0].company[0].website}`);
        // membership1.textContent = `${member.members[0].company[0].membership}`;

        // section.appendChild(logo1);

        // section.appendChild(address1);
        // section.appendChild(phone1);
        // section.appendChild(website1);
        // section.appendChild(membership1);


        // item.textContent = `${week.week}: `
        // title2.textContent = `${week.links[1].title}`
        // divide2.textContent = ' | '
        // title2.setAttribute('href', `${week.links[1].url}`)

        // title3.textContent = `${week.links[2].title}`
        // divide3.textContent = ' | '
        // title3.setAttribute('href', `${week.links[2].url}`)

        // item.appendChild(title1);
        // item.appendChild(divide1)
        // list.appendChild(item)

        // item.appendChild(title2);
        // item.appendChild(divide2)
        // list.appendChild(item)

        // item.appendChild(title3);
        // item.appendChild(divide3)
        // list.appendChild(item)

        // if (`${week.week}` == 'Week 3') {
        //     let title4 = document.createElement('a');
        //     title4.textContent = `${week.links[3].title}`
        //     title4.setAttribute('href', `${week.links[3].url}`)
        //     item.appendChild(title4);
        //     list.appendChild(item);
        // }
        // else if (`${week.week}` == 'Week 4') {
        //     let title4 = document.createElement('a');
        //     title4.textContent = `${week.links[3].title}`
        //     title4.setAttribute('href', `${week.links[3].url}`)
        //     item.appendChild(title4);
        //     list.appendChild(item);
        // }
        // else if (`${week.week}` == 'Week 5') {
        //     let title4 = document.createElement('a');
        //     let divide4 = document.createElement('a');
        //     title4.textContent = `${week.links[3].title}`
        //     title4.setAttribute('href', `${week.links[3].url}`)
        //     item.appendChild(title4);
        //     list.appendChild(item);
        // }
    });
}




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

const today = new Date()
document.querySelector("#time").textContent = today

