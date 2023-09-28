import React from "react";
import Row from "../Row/Row";
import Trending from "../Trending/Trending";
import "./Home.css";
import {
  useGetActionQuery,
  useGetComedyQuery,
  useGetDiscoverQuery,
  useGetDocumentariesQuery,
  useGetHorrorQuery,
  useGetRomanceQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
  useGetTvShowQuery,
} from "../../features/Api";

function Home() {
  return (
    <div className="container row-lists rows">
      <Row
        title="Netflix Originals"
        fetch={useGetDiscoverQuery()}
        isRepeat={true}
      />
      <Trending
        title="World Wide Trending"
        type={"tv"}
        fetch={useGetTrendingQuery()}
      />
      <Row title="Action Movies" type={"movie"} fetch={useGetActionQuery()} />
      <Row title="Top Rated" type={"movie"} fetch={useGetTopRatedQuery()} />
      <Row
        title="On the rise"
        type={"movie"}
        fetch={useGetDocumentariesQuery()}
      />
      <Row title="Comedy Movies" type={"movie"} fetch={useGetComedyQuery()} />
      <Row title="Horror Movies" type={"movie"} fetch={useGetHorrorQuery()} />
      <Row title="Romance Movies" type={"movie"} fetch={useGetRomanceQuery()} />
      <Row title="TV SHOW" type={"tv"} fetch={useGetTvShowQuery()} />
    </div>
  );
}

export default Home;
