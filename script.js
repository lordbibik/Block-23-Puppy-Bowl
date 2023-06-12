import { fetchAllPlayers, fetchSinglePlayer, addNewPlayer, removePlayer } from './api.js';

function createPlayerCard(player) {
    const playerCard = document.createElement('div');
    playerCard.classList.add('player-card');

    const nameHeading = document.createElement('h3');
    nameHeading.textContent = player.name;

    const imageElement = document.createElement('img');
    imageElement.src = player.imageUrl;
    imageElement.alt = player.name;

    const breedParagraph = document.createElement('p');
    breedParagraph.textContent = `Breed: ${player.breed}`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', () => {
        removePlayerFromRoster(player.id);
        playerCard.remove();
    });


    playerCard.appendChild(nameHeading);
    playerCard.appendChild(imageElement);
    playerCard.appendChild(breedParagraph);
    playerCard.appendChild(removeButton);
    playerCard.addEventListener('click', () => {
        viewPlayerDetails(player.id);
    });

    return playerCard;
}


async function renderPuppyPlayers() {
    const rosterContainer = document.getElementById('player-cards');
    rosterContainer.innerHTML = '';

    try {
        const p = await fetchAllPlayers();
        console.log(p);

        for (let player of p.data.players) {
            console.log(player);
            const playerCard = createPlayerCard(player);
            rosterContainer.appendChild(playerCard);
        }

    } catch (error) {
        console.log('Error rendering puppy players:', error);
    }
}
async function removePlayerFromRoster(playerId) {
    try {
        await removePlayer(playerId);
        console.log('Player removed:', playerId);
        await renderPuppyPlayers();
    } catch (error) {
        console.log('Error removing player:', error);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const breedInput = document.getElementById('breed');
    const imageInput = document.getElementById('image');

    const name = nameInput.value;
    const breed = breedInput.value;
    const imageFile = imageInput.files[0];

    
    const reader = new FileReader();

    reader.onload = function (e) {
        const imageUrl = e.target.result; 

        const player = {
            name: name,
            breed: breed,
            imageUrl: imageUrl
        };

        const playerCard = createPlayerCard(player);
        const rosterContainer = document.getElementById('player-cards');
        rosterContainer.appendChild(playerCard);

        
        nameInput.value = '';
        breedInput.value = '';
        imageInput.value = '';
    };

    
    reader.readAsDataURL(imageFile);
}

const form = document.getElementById('add-player-form');
form.addEventListener('submit', handleFormSubmit);

renderPuppyPlayers();
