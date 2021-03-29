import axios from "axios";

const BASEURL = "https://rawg-video-games-database.p.rapidapi.com/games"

const KEY = "30de55f9a4mshf984d53ea08b7a7p1e945fjsnab7068fa0cce"


// Export an object containing methods we'll use for accessing the Dog.Ceo API


const options = {
  method: 'GET',
  url: BASEURL,
  headers: {
    'x-rapidapi-key': KEY,
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
  }
};


export default {
  getVideoGames: async function() {
   return axios.request(options).then(function (response) {
    
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
     
    
    
  }
};
