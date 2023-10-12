const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

getProphetData(url);

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // fill in the blank
        let portrait = document.createElement('img');
        let dateOfBirth = document.createElement('p');
        let placeOfBirth = document.createElement('p')

        fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
        dateOfBirth.textContent = `${prophet.birthdate}`;
        placeOfBirth.textContent = `${prophet.birthplace}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName); //fill in the blank
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth)
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

