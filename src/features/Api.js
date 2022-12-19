import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useParams } from "react-router-dom";

export const nextflixApi = createApi({
  reducerPath: "nextflixApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),

  endpoints: (builder) => {
    const API_KEY = "e41e10a70ecb26587607640ae2112868";
    return {
      getDiscover: builder.query({
        query: () => ({
          url: `/discover/movie?api_key=${API_KEY}&with_network=123&language=en-US`,
          method: "GET",
        }),
      }),

      getTopRated: builder.query({
        query: () => ({
          url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
          method: "GET",
        }),
      }),

      getTrending: builder.query({
        query: () => ({
          url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
          method: "GET",
        }),
      }),

      getComedy: builder.query({
        query: () => ({
          url: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
          method: "GET",
        }),
      }),

      getTvShow: builder.query({
        query: () => ({
          url: `/discover/tv?api_key=${API_KEY}&with_network=123&language=en-US`,
          method: "GET",
        }),
      }),

      getPopular: builder.query({
        query: () => {
          return {
            url: `/movie/popular?api_key=${API_KEY}&page=1&language=en=US`,
            method: "GET",
          };
        },
      }),

      getById: builder.query({
        query: (params) => {
          const { type, id } = params;
          return {
            url: `/${type}/${id}?language=en-US&api_key=${API_KEY}`,
            method: "GET",
          };
        },
      }),

      getSearch: builder.query({
        query: (info) => {
          const { query, pageCount } = info;
          return {
            url: `/search/movie?query=${query}&api_key=${API_KEY}&page=${pageCount}`,
            method: "GET",
          };
        },
      }),

      getRomance: builder.query({
        query: () => {
          return {
            url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
            method: "GET",
          };
        },
      }),

      getHorror: builder.query({
        query: () => {
          return {
            url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
            method: "GET",
          };
        },
      }),

      getDocumentaries: builder.query({
        query: () => {
          return {
            url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useGetDiscoverQuery,
  useGetComedyQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
  useGetTvShowQuery,
  useGetPopularQuery,
  useGetByIdQuery,
  useGetSearchQuery,
  useGetHorrorQuery,
  useGetDocumentariesQuery,
  useGetRomanceQuery,
} = nextflixApi;
