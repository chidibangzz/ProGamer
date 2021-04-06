import React, { Component } from 'react'
//import { render } from 'react-dom';
import '../../App.css'
//import Cards from "../Cards"
import CardItem from "../CardItem"
import SearchForm from "../SearchForm"

class Products extends Component {
    constructor()
    {
        super()
        this.state = {
            results: [],
            list: [],
            currPage: "Products"
        }

        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount()
    {
        console.log('mounted!')
        const response = this.loadData()
        .then(response => {
            this.setState({list: response})
        })
    }

    handleKeyPress = (event) =>
    {
        if(event.key === 'Enter')
        {
            let search = document.getElementById('search')
            let term = search.value
    
            this.callBackendAPI(term)
            .then(response => {
                this.setState(
                    {
                        results: response.results
                    })
    
            })
        }
    }

    handleClick()
    {
        if(this.state.currPage === "search")
        {   
            console.log('mounted!')
            const data = this.loadData()
            .then(data => {
                this.setState({list: data,
                            currPage: "l"})
            })
        }
        else this.setState({currPage: "search"})
    }

    callBackendAPI = async (key_word) => {
        const response = await fetch(`/rawg/${key_word}`);
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message) 
        }
        return body;
    }

    loadData = async () => {
        const response = await  fetch('/api');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message) 
        }
        return body;
    }

render() 
{

    const videoGames = [
        {
        id:1,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:2,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:3,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:4,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:5,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:6,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:7,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:8,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:9,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:10,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:11,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        {
        id:12,
        src:"images/fortnite.jpeg",
        
        text:"Fornite Season 2",
        rating:"",
        releaseDate:"Realease Date: 2020",
        ratingNumber:"3566",
        label:'Pgamer',
        path:'/products'
        },
        
        
    ];

    return (

        <div className='cards'>
            <h1>Look what games we have in store!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items-container">
                    <CardItem displayGames={videoGames}/>
                    </ul>

                </div>
            </div>
        </div>

    )
}}

export default Products

