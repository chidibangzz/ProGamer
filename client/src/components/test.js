const axios=require("axios") ;
function API() {


const options = {
  method: 'GET',
  url: 'https://rawg-video-games-database.p.rapidapi.com/games',
  headers: {
    'x-rapidapi-key': '30de55f9a4mshf984d53ea08b7a7p1e945fjsnab7068fa0cce',
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data.results);
}).catch(function (error) {
	console.error(error);
});
}
export default API