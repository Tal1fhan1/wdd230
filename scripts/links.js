const baseURL = "https://tal1fhan1.github.io/wdd230/";
const linksURL = "https://tal1fhan1.github.io/wdd230/data/links.json";

async function getLinks(linksURL) {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.weeks[0].week);
    displayLinks(data.weeks);

}

getLinks(linksURL);

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let list = document.querySelector('.list');
        let item = document.createElement('li');
        let title1 = document.createElement('a');
        let divide1 = document.createElement('a');

        let title2 = document.createElement('a');
        let divide2 = document.createElement('a');

        let title3 = document.createElement('a');
        let divide3 = document.createElement('a');

        title1.textContent = `${week.links[0].title}`
        divide1.textContent = ' | '
        title1.setAttribute('href', `${week.links[0].url}`)

        item.textContent = `${week.week}: `
        title2.textContent = `${week.links[1].title}`
        divide2.textContent = ' | '
        title2.setAttribute('href', `${week.links[1].url}`)

        title3.textContent = `${week.links[2].title}`
        divide3.textContent = ' | '
        title3.setAttribute('href', `${week.links[2].url}`)

        item.appendChild(title1);
        item.appendChild(divide1)
        list.appendChild(item)

        item.appendChild(title2);
        item.appendChild(divide2)
        list.appendChild(item)

        item.appendChild(title3);
        item.appendChild(divide3)
        list.appendChild(item)

        if (`${week.week}` == 'Week 3') {
            let title4 = document.createElement('a');
            title4.textContent = `${week.links[3].title}`
            title4.setAttribute('href', `${week.links[3].url}`)
            item.appendChild(title4);
            list.appendChild(item);
        }
        else if (`${week.week}` == 'Week 4') {
            let title4 = document.createElement('a');
            title4.textContent = `${week.links[3].title}`
            title4.setAttribute('href', `${week.links[3].url}`)
            item.appendChild(title4);
            list.appendChild(item);
        }
        else if (`${week.week}` == 'Week 5') {
            let title4 = document.createElement('a');
            let divide4 = document.createElement('a');
            title4.textContent = `${week.links[3].title}`
            title4.setAttribute('href', `${week.links[3].url}`)
            item.appendChild(title4);
            list.appendChild(item);
        }
    });
}


