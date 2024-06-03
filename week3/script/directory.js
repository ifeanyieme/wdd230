document.addEventListener('DOMContentLoaded', () => {
    const memberContainer = document.querySelector('main');

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data);
        })
        .catch(error => console.error('Error fetching the JSON data:', error));

    function displayMembers(members) {
        memberContainer.innerHTML = '';
        members.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.classList.add('member-card');
            memberElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <p>Membership Level: ${member.membershipLevel}</p>
            `;
            memberContainer.appendChild(memberElement);
        });
    }

    const toggleViewButton = document.getElementById('toggleView');
    toggleViewButton.addEventListener('click', () => {
        memberContainer.classList.toggle('list-view');
    });
});
