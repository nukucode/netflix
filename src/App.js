import React, { useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useGetTrendingQuery } from "./features/Api";
import Home from "./components/Home/Home";
import Details from "./pages/Details/Details";
import Search from "./pages/Search/Search";

function App() {
  useEffect(() => {
    document.title = "Netflix - raoankit";
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
                  <Header />
                  <Banner fetch={useGetTrendingQuery()} />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/details/:type/:id"
              exact
              element={
                <>
                  <Details />
                </>
              }
            />

            <Route
              path="/search"
              exact
              element={
                <>
                  <Search />
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
