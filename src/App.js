import React, { useEffect } from "react";
import "./App.css";
import Banner from "./Banner";
import Footer from "./Footer";
import Nav from "./Nav";
import requests from "./Request";
import Row from "./Row";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";

function App() {
  useEffect(() => {
    document.title = "Netflix - therogersak";
  }, []);
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route
              path="/netflix_clone_with_react_js"
              element={
                <>
                  <Nav />
                  <Banner />
                  <Row
                    title="Action Movies"
                    fetch={requests.fetchActionMovies}
                  />
                  <Row
                    title="Netflix Originals"
                    fetch={requests.fetchNetflixOriginals}
                  />
                  <Row title="Trending" fetch={requests.fetchTrending} isTop />
                  <Row title="Top Rated" fetch={requests.fetchTopRated} />
                  <Row
                    title="Comedy Movies"
                    fetch={requests.fetchComedyMovies}
                  />
                  <Row
                    title="Horror Movies"
                    fetch={requests.fetchHorrorMovies}
                  />
                  <Row
                    title="Romance Movies"
                    fetch={requests.fetchRomanceMovies}
                  />
                  <Row
                    title="Documentarios"
                    fetch={requests.fetchDocumentaries}
                  />
                  <Footer />
                </>
              }
            />

            <Route
              path="/details/:type/:id"
              exact
              element={
                <>
                  {" "}
                  <Home />{" "}
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
