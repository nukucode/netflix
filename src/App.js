import React from "react";
import "./App.css";
import Banner from "./Banner";
import Footer from "./Footer";
import Nav from "./Nav";
import requests from "./Request";
import Row from "./Row";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Banner />
        <Row title="Trending" fetch={requests.fetchTrending} isTop />
        <Row title="Netflix Originals" fetch={requests.fetchNetflixOriginals} />
        <Row title="Top Rated" fetch={requests.fetchTopRated} />
        <Row title="Action Movies" fetch={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetch={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetch={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetch={requests.fetchRomanceMovies} />
        <Row title="Series" fetch={requests.fetchDocumentaries} />
        <Footer />
      </div>
    </>
  );
}

export default App;
