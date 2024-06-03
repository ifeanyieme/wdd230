document.addEventListener('DOMContentLoaded', function() {
    const memberContainer = document.getElementById('member-container');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    // Fetch the member data
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            renderGridView(data);
            gridViewButton.addEventListener('click', () => renderGridView(data));
            listViewButton.addEventListener('click', () => renderListView(data));
        })
        .catch(error => console.error('Error fetching member data:', error));

    function renderGridView(members) {
        memberContainer.className = 'grid-view';
        memberContainer.innerHTML = members.map(member => `
            <div class="member-card">
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Website</a>
                <p>Membership Level: ${member.membershipLevel}</p>
            </div>
        `).join('');
    }

    function renderListView(members) {
        memberContainer.className = 'list-view';
        memberContainer.innerHTML = members.map(member => `
            <div class="member-list-item">
                <img src="images/${member.image}" alt="${member.name}">
                <div>
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Website</a>
                    <p>Membership Level: ${member.membershipLevel}</p>
                </div>
            </div>
        `).join('');
    }
});
