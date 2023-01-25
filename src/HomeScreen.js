import React from 'react';
import"./HomeScreen.css";
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import Requests from './Request';


function HomeScreen() {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Row title= "New Releases" fetchUrl={Requests.fetchNetflixOriginals} isLargeRow ={true}/>
      <Row title= "Trending Now" fetchUrl={Requests.fetchTrending}/>
      <Row title= "Top Rated" fetchUrl={Requests.fetchTopRated}/>
      <Row title= "Action Movies" fetchUrl={Requests.fetchActionMovies}/>
      <Row title= "Comedy Movies" fetchUrl={Requests.fetchComedyMovies}/>
      <Row title= "Horror Movies" fetchUrl={Requests.fetchHorrorMovies}/>
      <Row title= "Romance Movies" fetchUrl={Requests.fetchRomanceMovies}/>
      <Row title= "Documentaries" fetchUrl={Requests.fetchDocumantaries}/>
      
    </div>
  )
}

export default HomeScreen;