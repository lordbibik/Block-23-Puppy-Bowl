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
}
