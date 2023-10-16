const membersURL = "https://tal1fhan1.github.io/wdd230/chamber/data/members.json";

async function getMembers(membersURL) {
    const response = await fetch(membersURL);
    const data = await response.json();
    console.log(data.members[0].companies[0].website);
    displayMembers(data.members);
}

getMembers(membersURL);


const displayMembers = (members) => {
    members.forEach((member) => {
        let section1 = document.getElementById('company-grid');
        let div1 = document.createElement('div');
        div1.setAttribute('id', 'company1-grid')
        let name1 = document.createElement('h3');
        let logo1 = document.createElement('img');
        let address1 = document.createElement('p');
        let phone1 = document.createElement('p');
        let website1 = document.createElement('a');
        let membership1 = document.createElement('p');

        let section2 = document.getElementById('company-grid');
        let div2 = document.createElement('div');
        div2.setAttribute('id', 'company2-grid');
        let name2 = document.createElement('h3');
        let logo2 = document.createElement('img');
        let address2 = document.createElement('p');
        let phone2 = document.createElement('p');
        let website2 = document.createElement('a');
        let membership2 = document.createElement('p');

        let section3 = document.getElementById('company-grid');
        let div3 = document.createElement('div');
        div3.setAttribute('id', 'company3-grid');
        let name3 = document.createElement('h3');
        let logo3 = document.createElement('img');
        let address3 = document.createElement('p');
        let phone3 = document.createElement('p');
        let website3 = document.createElement('a');
        let membership3 = document.createElement('p');

        let section4 = document.getElementById('company-grid');
        let div4 = document.createElement('div');
        div4.setAttribute('id', 'company4-grid');
        let name4 = document.createElement('h3');
        let logo4 = document.createElement('img');
        let address4 = document.createElement('p');
        let phone4 = document.createElement('p');
        let website4 = document.createElement('a');
        let membership4 = document.createElement('p');

        let section5 = document.getElementById('company-grid');
        let div5 = document.createElement('div');
        div5.setAttribute('id', 'company5-grid');
        let name5 = document.createElement('h3');
        let logo5 = document.createElement('img');
        let address5 = document.createElement('p');
        let phone5 = document.createElement('p');
        let website5 = document.createElement('a');
        let membership5 = document.createElement('p');

        let section6 = document.getElementById('company-grid');
        let div6 = document.createElement('div');
        div6.setAttribute('id', 'company6-grid');
        let name6 = document.createElement('h3');
        let logo6 = document.createElement('img');
        let address6 = document.createElement('p');
        let phone6 = document.createElement('p');
        let website6 = document.createElement('a');
        let membership6 = document.createElement('p');

        let section7 = document.getElementById('company-grid');
        let div7 = document.createElement('div');
        div7.setAttribute('id', 'company7-grid');
        let name7 = document.createElement('h3');
        let logo7 = document.createElement('img');
        let address7 = document.createElement('p');
        let phone7 = document.createElement('p');
        let website7 = document.createElement('a');
        let membership7 = document.createElement('p');


        name1.textContent = `${member.companies[0].name}`;
        address1.textContent = `${member.companies[0].address}`;
        phone1.textContent = `${member.companies[0].phone}`;
        website1.textContent = `${member.companies[0].website}`;
        website1.setAttribute('href', member.companies[0].website);
        membership1.textContent = `Membership: ${member.companies[0].membership}`;
        logo1.setAttribute('src', member.companies[0].logo);
        logo1.setAttribute('alt', `${member.companies[0].name} logo`);
        logo1.setAttribute('width', '160px');
        logo1.setAttribute('height', '106px');
        logo1.setAttribute('loading', 'lazy');
        div1.appendChild(logo1);
        div1.appendChild(name1);
        div1.appendChild(address1);
        div1.appendChild(phone1);
        div1.appendChild(website1);
        div1.appendChild(membership1);
        section1.appendChild(div1)

        name2.textContent = `${member.companies[1].name}`;
        address2.textContent = `${member.companies[1].address}`;
        phone2.textContent = `${member.companies[1].phone}`;
        website2.textContent = `${member.companies[1].website}`;
        website2.setAttribute('href', `${member.companies[1].website}`);
        membership2.textContent = `Membership: ${member.companies[1].membership}`;
        logo2.setAttribute('src', member.companies[1].logo);
        logo2.setAttribute('alt', `${member.companies[1].name} logo`);
        logo2.setAttribute('width', '203px');
        logo2.setAttribute('height', '114px');
        logo2.setAttribute('loading', 'lazy');
        div2.appendChild(logo2);
        div2.appendChild(name2);
        div2.appendChild(address2);
        div2.appendChild(phone2);
        div2.appendChild(website2);
        div2.appendChild(membership2);
        section2.appendChild(div2);

        name3.textContent = `${member.companies[2].name}`;
        address3.textContent = `${member.companies[2].address}`;
        phone3.textContent = `${member.companies[2].phone}`;
        website3.textContent = `${member.companies[2].website}`;
        website3.setAttribute('href', `${member.companies[2].website}`);
        membership3.textContent = `Membership: ${member.companies[2].membership}`;
        logo3.setAttribute('src', member.companies[2].logo);
        logo3.setAttribute('alt', `${member.companies[2].name} logo`);
        logo3.setAttribute('width', '125px');
        logo3.setAttribute('height', '125px');
        logo3.setAttribute('loading', 'lazy');
        div3.appendChild(logo3);
        div3.appendChild(name3);
        div3.appendChild(address3);
        div3.appendChild(phone3);
        div3.appendChild(website3);
        div3.appendChild(membership3);
        section3.appendChild(div3);

        name4.textContent = `${member.companies[3].name}`;
        address4.textContent = `${member.companies[3].address}`;
        phone4.textContent = `${member.companies[3].phone}`;
        website4.textContent = `${member.companies[3].website}`;
        website4.setAttribute('href', `${member.companies[3].website}`);
        membership4.textContent = `Membership: ${member.companies[3].membership}`;
        logo4.setAttribute('src', member.companies[3].logo);
        logo4.setAttribute('alt', `${member.companies[3].name} logo`);
        logo4.setAttribute('width', '217px');
        logo4.setAttribute('height', '66px');
        logo4.setAttribute('loading', 'lazy');
        div4.appendChild(logo4);
        div4.appendChild(name4);
        div4.appendChild(address4);
        div4.appendChild(phone4);
        div4.appendChild(website4);
        div4.appendChild(membership4);
        section4.appendChild(div4);

        name5.textContent = `${member.companies[4].name}`;
        address5.textContent = `${member.companies[4].address}`;
        phone5.textContent = `${member.companies[4].phone}`;
        website5.textContent = `${member.companies[4].website}`;
        website5.setAttribute('href', `${member.companies[4].website}`);
        membership5.textContent = `Membership: ${member.companies[4].membership}`;
        logo5.setAttribute('src', member.companies[4].logo);
        logo5.setAttribute('alt', `${member.companies[4].name} logo`);
        logo5.setAttribute('width', '200px');
        logo5.setAttribute('height', '60px');
        logo5.setAttribute('loading', 'lazy');
        div5.appendChild(logo5);
        div5.appendChild(name5);
        div5.appendChild(address5);
        div5.appendChild(phone5);
        div5.appendChild(website5);
        div5.appendChild(membership5);
        section5.appendChild(div5);

        name6.textContent = `${member.companies[5].name}`;
        address6.textContent = `${member.companies[5].address}`;
        phone6.textContent = `${member.companies[5].phone}`;
        website6.textContent = `${member.companies[5].website}`;
        website6.setAttribute('href', `${member.companies[5].website}`);
        membership6.textContent = `Membership: ${member.companies[5].membership}`;
        logo6.setAttribute('src', member.companies[5].logo);
        logo6.setAttribute('alt', `${member.companies[5].name} logo`);
        logo6.setAttribute('width', '200px');
        logo6.setAttribute('height', '50px');
        logo6.setAttribute('loading', 'lazy');
        div6.appendChild(logo6);
        div6.appendChild(name6);
        div6.appendChild(address6);
        div6.appendChild(phone6);
        div6.appendChild(website6);
        div6.appendChild(membership6);
        section6.appendChild(div6);

        name7.textContent = `${member.companies[6].name}`;
        address7.textContent = `${member.companies[6].address}`;
        phone7.textContent = `${member.companies[6].phone}`;
        website7.textContent = `${member.companies[6].website}`;
        website7.setAttribute('href', `${member.companies[6].website}`);
        membership7.textContent = `Membership: ${member.companies[6].membership}`;
        logo7.setAttribute('src', member.companies[6].logo);
        logo7.setAttribute('alt', `${member.companies[6].name} logo`);
        logo7.setAttribute('width', '160px');
        logo7.setAttribute('height', '106px');
        logo7.setAttribute('loading', 'lazy');
        div7.appendChild(logo7);
        div7.appendChild(name7);
        div7.appendChild(address7);
        div7.appendChild(phone7);
        div7.appendChild(website7);
        div7.appendChild(membership7);
        section7.appendChild(div7);
    });
}

const gridbutton = document.querySelector(".grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#company-grid");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.setAttribute('id', 'company-grid')
    document.querySelector('#company1-list').setAttribute('id', 'company1-grid');
    document.querySelector('#company2-list').setAttribute('id', 'company2-grid');
    document.querySelector('#company3-list').setAttribute('id', 'company3-grid');
    document.querySelector('#company4-list').setAttribute('id', 'company4-grid');
    document.querySelector('#company5-list').setAttribute('id', 'company5-grid');
    document.querySelector('#company6-list').setAttribute('id', 'company6-grid');
    document.querySelector('#company7-list').setAttribute('id', 'company7-grid');
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.setAttribute('id', 'company-list')
    document.querySelector('#company1-grid').setAttribute('id', 'company1-list');
    document.querySelector('#company2-grid').setAttribute('id', 'company2-list');
    document.querySelector('#company3-grid').setAttribute('id', 'company3-list');
    document.querySelector('#company4-grid').setAttribute('id', 'company4-list');
    document.querySelector('#company5-grid').setAttribute('id', 'company5-list');
    document.querySelector('#company6-grid').setAttribute('id', 'company6-list');
    document.querySelector('#company7-grid').setAttribute('id', 'company7-list');
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

