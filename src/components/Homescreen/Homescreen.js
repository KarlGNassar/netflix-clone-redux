import React from 'react'
import Banner from '../Banner/Banner'
import Nav from '../Nav/Nav'
import Row from '../Row/Row'
import './Homescreen.css'
import requests from '../../Requests'

const Homescreen = () => {
    return (
        <div className="homescreen">
            <Nav />
            
            <Banner />

            <Row 
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row 
                title='Trending Now'
                fetchUrl={requests.fetchTrending}
            />
            <Row 
                title='Top Rated'
                fetchUrl={requests.fetchTopRated}
            />
            <Row 
                title='Action Movies'
                fetchUrl={requests.fetchActionMovies}
            />
            <Row 
                title='Comedy Movies'
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row 
                title='Horror Movies'
                fetchUrl={requests.fetchHorroMovies}
            />
            <Row 
                title='Romance Movies'
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row 
                title='Documentaries'
                fetchUrl={requests.fetchDocumentaries}
            />
            
        </div>
    )
}

export default Homescreen
