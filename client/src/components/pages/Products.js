import React from 'react'
import '../../App.css'
import Cards from "../Cards"
import CardItem from "../CardItem"
import Card from "../Cards.css"

export default function Products() {
    return (

        <div className='cards'>
            <h1>Look what we have in store</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Grand theft auto"
                            label='adventure'
                            path='/products'
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}