const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-A'; 

const fetchAllPlayers = async () => {
    try {
      const response = await fetch(APIURL + 'players');
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Uh oh, trouble fetching players!', err);
    }
  };
  
  const fetchSinglePlayer = async (playerId) => {
    try {
      const response = await fetch(APIURL + `players/${playerId}`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
  };
  
  const addNewPlayer = async (playerObj) => {
    try {
      const response = await fetch(APIURL + 'players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(playerObj)
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Oops, something went wrong with adding that player!', err);
    }
  };
  
  const removePlayer = async (playerId) => {
    try {
      const response = await fetch(APIURL + `players/${playerId}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(`Whoops, trouble removing player #${playerId} from the roster!`, err);
    }
  };
  
  export { fetchAllPlayers, fetchSinglePlayer, addNewPlayer, removePlayer };
