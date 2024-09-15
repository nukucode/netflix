import React, { useEffect } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Nav from "./Nav";
import Row from "./Row";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

import {
  useGetDiscoverQuery,
  useGetComedyQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
  useGetTvShowQuery,
  useGetDocumentariesQuery,
  useGetHorrorQuery,
  useGetRomanceQuery,
} from "../features/Api";

function App() {
  useEffect(() => {
    document.title = "Netflix A Clone Project By Nukucode";
  }, []);
  return (
    <>
      <div className="app">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Nav />
                  <Banner fetch={useGetTrendingQuery()} />
                  <Row title="Action Movies" fetch={useGetTrendingQuery()} />
                  <Row
                    title="Netflix Originals"
                    fetch={useGetDocumentariesQuery()}
                  />
                  <Row title="Trending" fetch={useGetTopRatedQuery()} />
                  <Row title="Top Rated" fetch={useGetDiscoverQuery()} />
                  <Row title="Comedy Movies" fetch={useGetComedyQuery()} />
                  <Row title="Horror Movies" fetch={useGetHorrorQuery()} />
                  <Row title="Romance Movies" fetch={useGetRomanceQuery()} />
                  <Row title="TV SHOW" fetch={useGetTvShowQuery()} />
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
