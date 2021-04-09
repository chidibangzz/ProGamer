import React from "react"
import './UpcomingCard.css'
import godOf from "../images/godofwar.jpeg";
import returnal from "../images/returnal.jpeg";
import balance from "../images/balanwonderland.jpeg"



function UpcomingVideoGames() {


  

    return (


        <div className='cards'>

            <h1>Upcoming Releases!</h1>
            <div className="cards__containers">
                <div className="cards__wrappers" >
                    <ul className="cards__items">

                        <>
                            <li className="cards__items">

                                <div className="cards__item__links" >
                                    <figure className="cards__item__pic-wraps"

                                    >
                                        <img src={godOf}
                                            alt="Mario"
                                            className="cards__item__img"
                                            images={godOf}
                                        />
                                    </figure>
                                    <div className="cards__item__info">
                                        <ul className="logo" className="fab fa-xbox">
                                            <li className="logo" className="fab fa-playstation"></li>
                                            <li className="logo" className="fab fa-windows"></li>

                                        </ul>
                                        <h5 className="cards__item__text"></h5>
                                        <h6 className="cards__item__text">God Of War</h6>

                                        {/* {JSON.stringify(games)} */}
                                        <h6 className="cards__item__text">
                                           
                                        </h6>
                                        <h6 className="cards__item__text">
                                            <i className="fas fa-plus"></i>
                                        </h6>

                                    </div>
                                </div>

                            </li>
                        </>
                    </ul>
                
                
                    <ul className="cards__items">

                        <>
                            <li className="cards__items">

                                <div className="cards__item__links" >
                                    <figure className="cards__item__pic-wraps"

                                    >
                                        <img src={returnal}
                                            alt="Mario"
                                            className="cards__item__img"
                                            images={returnal}
                                        />
                                    </figure>
                                    <div className="cards__item__info">
                                        <ul className="logo" className="fab fa-xbox">
                                            <li className="logo" className="fab fa-playstation"></li>
                                            <li className="logo" className="fab fa-windows"></li>

                                        </ul>
                                        <h5 className="cards__item__text">Returnal</h5>
                                        <h6 className="cards__item__text"></h6>

                                        {/* {JSON.stringify(games)} */}
                                        <h6 className="cards__item__text">
                                           
                                        </h6>
                                        <h6 className="cards__item__text">
                                            <i className="fas fa-plus"></i>
                                        </h6>

                                    </div>
                                </div>

                            </li>
                        </>
                    </ul>
               
                
                    <ul className="cards__itemss">

                        <>
                            <li className="cards__items">

                                <div className="cards__item__links" >
                                    <figure className="cards__item__pic-wraps"

                                    >
                                        <img src={balance}
                                            alt="Mario"
                                            className="cards__item__img"
                                            images={balance}
                                        />
                                    </figure>
                                    <div className="cards__item__info">
                                        <ul className="logo" className="fab fa-xbox">
                                            <li className="logo" className="fab fa-playstation"></li>
                                            <li className="logo" className="fab fa-windows"></li>

                                        </ul>
                                        <h5 className="cards__item__text">Balan Wonderworld</h5>
                                        <h6 className="cards__item__text"></h6>

                                        {/* {JSON.stringify(games)} */}
                                        <h6 className="cards__item__text">
                  
                                        </h6>
                                        <h6 className="cards__item__text">
                                            <i className="fas fa-plus"></i>
                                        </h6>

                                    </div>
                                </div>

                            </li>
                        </>
                    </ul>
                </div>
            </div>

        </div>

    )
}









export default UpcomingVideoGames
