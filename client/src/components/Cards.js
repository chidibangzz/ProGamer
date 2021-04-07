// import React, { useEffect, useState } from "react";
// import CardItem from './CardItem'
// import './Cards.css'
// import API from './utils/API'





// function Cards() {
// const [videoGames, setVideGame] = useState([]);
 
// useEffect(() => {
//     (async () => {
//         const results = await API.getVideoGames();
//         console.log(results, "Response")
//         setVideGame(results);
//       })();

// }, [])


// function loadVideogames() {
//     API.search()
//       .then(res => 
//         setVideGame(res.data)
//       )
//       .catch(err => console.log(err));
//   };

    
    // return (


//         <div className='cards'>
//         <h1>Check out excellent portfolio</h1> 
//         <div className="cards__container">
//         <div className="cards__wrapper">
//             <ul className="cards__items">
//                 <CardItem 
//                 src="images/img-9.jpg"
//                 text="Explore porfolio goodnes"
//                 label='adventure'
//                 path='/products'
                
//                 />
//                 <CardItem 
//                 src="images/img-2.jpg"
//                 text="Project Employee directory"
//                 label='Luxury'
//                 path='/products'
//                 />
//             </ul>
//             <ul className="cards__items">
//                 <CardItem 
//                 src="images/img-9.jpg"
//                 text="Explore porfolio goodnes"
//                 label='adventure'
//                 path='/products'
//                 />
//                 <CardItem 
//                 src="images/img-2.jpg"
//                 text="Project Employee directory"
//                 label='Luxury'
//                 path='/products'
//                 />
//                  <CardItem 
//                 src="images/img-2.jpg"
//                 text="Project Employee directory"
//                 label='Luxury'
//                 path='/products'
//                 />
//             </ul>
            
//         </div>
//         </div>
//         </div>
//     )
// }

// export default Cards
