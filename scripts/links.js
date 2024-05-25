const baseURL = 'https://ifeanyieme.github.io/wdd230/'; // Replace with your actual GitHub pages URL
const linksURL = `https://ifeanyieme.github.io/wdd230/data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error fetching links data:', error);
    }
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById('activity-links');
    linksContainer.innerHTML = '';

    weeks.forEach(week => {
        const weekSection = document.createElement('div');
        weekSection.classList.add('week-section');

        const weekTitle = document.createElement('h3');
        weekTitle.textContent = week.week;
        weekSection.appendChild(weekTitle);

        const linksList = document.createElement('ul');
        week.links.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = `${baseURL}${link.url}`;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        weekSection.appendChild(linksList);
        linksContainer.appendChild(weekSection);
    });
}

// Call the function to fetch and display links
getLinks();
