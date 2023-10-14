const url = 'https://www.nchsoftware.com/photoeditor/screenshots/photopadscreen-3.jpg'
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
        let section1 = document.getElementById('company');
        let div1 = document.createElement('div');
        div1.setAttribute('id', 'company1')
        let name1 = document.createElement('h3');
        let logo1 = document.createElement('img');
        let address1 = document.createElement('p');
        let phone1 = document.createElement('p');
        let website1 = document.createElement('span');
        let membership1 = document.createElement('p');

        let section2 = document.getElementById('company');
        let div2 = document.createElement('div');
        div2.setAttribute('id', 'company2');
        let name2 = document.createElement('h3');
        let logo2 = document.createElement('img');
        let address2 = document.createElement('p');
        let phone2 = document.createElement('p');
        let website2 = document.createElement('span');
        let membership2 = document.createElement('p');

        let section3 = document.getElementById('company');
        let div3 = document.createElement('div');
        div3.setAttribute('id', 'company3');
        let name3 = document.createElement('h3');
        let logo3 = document.createElement('img');
        let address3 = document.createElement('p');
        let phone3 = document.createElement('p');
        let website3 = document.createElement('span');
        let membership3 = document.createElement('p');

        let section4 = document.getElementById('company');
        let div4 = document.createElement('div');
        div4.setAttribute('id', 'company4');
        let name4 = document.createElement('h3');
        let logo4 = document.createElement('img');
        let address4 = document.createElement('p');
        let phone4 = document.createElement('p');
        let website4 = document.createElement('span');
        let membership4 = document.createElement('p');

        let section5 = document.getElementById('company');
        let div5 = document.createElement('div');
        div5.setAttribute('id', 'company5');
        let name5 = document.createElement('h3');
        let logo5 = document.createElement('img');
        let address5 = document.createElement('p');
        let phone5 = document.createElement('p');
        let website5 = document.createElement('span');
        let membership5 = document.createElement('p');

        let section6 = document.getElementById('company');
        let div6 = document.createElement('div');
        div6.setAttribute('id', 'company6');
        let name6 = document.createElement('h3');
        let logo6 = document.createElement('img');
        let address6 = document.createElement('p');
        let phone6 = document.createElement('p');
        let website6 = document.createElement('span');
        let membership6 = document.createElement('p');

        let section7 = document.getElementById('company');
        let div7 = document.createElement('div');
        div7.setAttribute('id', 'company7');
        let name7 = document.createElement('h3');
        let logo7 = document.createElement('img');
        let address7 = document.createElement('p');
        let phone7 = document.createElement('p');
        let website7 = document.createElement('span');
        let membership7 = document.createElement('p');


        name1.textContent = `${member.companies[0].name}`;
        address1.textContent = `${member.companies[0].address}`;
        phone1.textContent = `${member.companies[0].phone}`;
        website1.textContent = `${member.companies[0].website}`;
        website1.setAttribute = ('href', `${member.companies[0].website}`);
        membership1.textContent = `Membership: ${member.companies[0].membership}`;
        logo1.setAttribute = ('src', url);
        logo1.setAttribute = ('alt', 'what?');
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
        website2.setAttribute = ('href', `${member.companies[1].website}`);
        membership2.textContent = `Membership: ${member.companies[1].membership}`;
        logo2.setAttribute = ('src', url);
        logo2.setAttribute = ('alt', 'what?');
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
        website3.setAttribute = ('href', `${member.companies[2].website}`);
        membership1.textContent = `Membership: ${member.companies[2].membership}`;
        logo3.setAttribute = ('src', url);
        logo3.setAttribute = ('alt', 'what?');
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
        website4.setAttribute = ('href', `${member.companies[3].website}`);
        membership4.textContent = `Membership: ${member.companies[3].membership}`;
        logo4.setAttribute = ('src', url);
        logo4.setAttribute = ('alt', 'what?');
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
        website5.setAttribute = ('href', `${member.companies[4].website}`);
        membership5.textContent = `Membership: ${member.companies[4].membership}`;
        logo5.setAttribute = ('src', url);
        logo5.setAttribute = ('alt', 'what?');
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
        website6.setAttribute = ('href', `${member.companies[5].website}`);
        membership6.textContent = `Membership: ${member.companies[5].membership}`;
        logo6.setAttribute = ('src', url);
        logo6.setAttribute = ('alt', 'what?');
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
        website7.setAttribute = ('href', `${member.companies[6].website}`);
        membership7.textContent = `Membership: ${member.companies[6].membership}`;
        logo7.setAttribute = ('src', url);
        logo7.setAttribute = ('alt', 'what?');
        div7.appendChild(logo7);
        div7.appendChild(name7);
        div7.appendChild(address7);
        div7.appendChild(phone7);
        div7.appendChild(website7);
        div7.appendChild(membership7);
        section7.appendChild(div7);

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

