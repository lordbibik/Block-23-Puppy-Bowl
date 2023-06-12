const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-A'; 

async function fetchAllPlayers() {
  try {
    const response = await fetch(`${API_URL}/players`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Uh oh, trouble fetching players!', err);
    }
  };
  
  async function fetchSinglePlayer(playerId) {
  try {
    const response = await fetch(`${API_URL}/players/${playerId}`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
  };
  
  async function addNewPlayer(playerData) {
  try {
    const response = await fetch(`${API_URL}/players`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(playerData)
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Oops, something went wrong with adding that player!', err);
    }
  };
  
  async function removePlayer(playerId) {
  try {
    const response = await fetch(`${API_URL}/players/${playerId}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(`Whoops, trouble removing player #${playerId} from the roster!`, err);
    }
  };
  
  export { fetchAllPlayers, fetchSinglePlayer, addNewPlayer, removePlayer };
