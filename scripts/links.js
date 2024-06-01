const baseURL = "https://ifeanyieme.github.io/wdd230/"; // I replaced my GitHub Pages URL here.
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Data fetched successfully:', data); // Debug log
    displayLinks(data.weeks);
  } catch (error) {
    console.error('Error fetching links:', error);
  }
}

function displayLinks(weeks) {
  const activityLinksSection = document.getElementById('activity-links');
  activityLinksSection.innerHTML = ''; // THIS clear any existing content

  weeks.forEach(week => {
    const weekDiv = document.createElement('div');
    weekDiv.classList.add('week');

    const weekTitle = document.createElement('h2');
    weekTitle.textContent = week.week;
    weekDiv.appendChild(weekTitle);

    const linksList = document.createElement('ul');
    
    week.links.forEach(link => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = `${baseURL}${link.url}`;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);
      linksList.appendChild(listItem);
    });

    weekDiv.appendChild(linksList);
    activityLinksSection.appendChild(weekDiv);
  });
}

getLinks();




