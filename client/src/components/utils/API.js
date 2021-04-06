import axios from "axios";

const BASEURL = "https://rawg-video-games-database.p.rapidapi.com/games";

const KEY = process.env.REACT_APP_KEY;


// Export an object containing methods we'll use for accessing the rawg API


const options = {
  
  url: BASEURL,
  headers: {
    'x-rapidapi-key': KEY,
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
  }
};




export default {
  getVideoGames: function() {
    return axios.get("/api/videoGames");
  }
};








// export default {
//   getVideoGames: async function() {
//    return axios.request(options).then(function (response) {
    
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
     
    
    
//   }
// };
