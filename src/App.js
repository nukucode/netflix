import React, { useEffect } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Header";
import Row from "./components/Row";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Play from "./pages/Play";

import {
  useGetDiscoverQuery,
  useGetComedyQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
  useGetHorrorQuery,
  useGetRomanceQuery,
  useGetTrendingSeriesQuery,
  useGetAdventureQuery,
  useGetSiFiQuery,
  useGetAnimatedQuery,
} from "./features/Api";
import ErrorPage from "./pages/ErrorPage";
import SearchPage from "./pages/SearchPage";

function App() {
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
                  <Banner useGetTrendingQuery={useGetTrendingQuery} />
                  <Row
                    title="Netflix Originals"
                    fetch={useGetDiscoverQuery()}
                    type="tv"
                  />
                  <Row title="Trending" fetch={useGetTrendingQuery()} />
                  <Row title="Top Rated" fetch={useGetTopRatedQuery()} />
                  <Row title="Comedy" fetch={useGetComedyQuery()} />
                  <Row title="Horror" fetch={useGetHorrorQuery()} />
                  <Row title="Romance" fetch={useGetRomanceQuery()} />
                  <Row title="Adventure" fetch={useGetAdventureQuery()} />
                  <Row title="Animated" fetch={useGetAnimatedQuery()} />
                  <Row title="SciFi" fetch={useGetSiFiQuery()} />
                  <Row
                    title="Documentaries"
                    fetch={useGetTrendingSeriesQuery()}
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
                  <Play />{" "}
                </>
              }
            />

            <Route path="*" element={<ErrorPage />} />
            <Route path="/search/:query" element={<SearchPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
