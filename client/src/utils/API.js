import axios from "axios";



// Export an object containing methods we'll use for accessing the rawg API


// const options = {
  
//   url: BASEURL,
//   headers: {
//     'x-rapidapi-key': KEY,
//     'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
//   }
// };


// export default function getVideoGamess() {
//   return <div>{window.env.REACT_APP_KEY}</div>;
// }
// console.log(window.env.REACT_APP_KEY)




export default {
  getFavoriteGames: function() {
    return axios.get("/api/videoGames")
  },
  addGameToWishList: function(addGame) {
    return axios.post("/api/videoGames",addGame)
  },
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
