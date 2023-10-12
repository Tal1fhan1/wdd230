const baseURL = "https://tal1fhan1.github.io/wdd230/";
const linksURL = "https://tal1fhan1.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // displayLinks(data);
    console.log(data);
}

getLinks(url);

// const displayLinks = (links) => {
//     links.forEach((link) => {
//         let list = document.createElement('ul');
//         let week = document.createElement('li'); // fill in the blank
//         let content = document.createElement('a');

//         content.textContent = `${link.title}`;
//         portrait.setAttribute('height', '440');
//         content.setAttribute('href', `${link.url}`)

//         card.appendChild(fullName); //fill in the blank
//         card.appendChild(dateOfBirth);
//         card.appendChild(placeOfBirth)
//         card.appendChild(portrait);

//         cards.appendChild(card);
//     });
// }
