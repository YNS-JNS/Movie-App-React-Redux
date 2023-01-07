import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Container } from "react-bootstrap";
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import NotFound from './components/NotFound';

const App = () => {

  const [movies, setMovies] = useState([]);

  // save page number (pagination) and update pageCount
  const [pageCount, setPageCount] = useState(0);

  // Get All Movies by axios
  const getAllMovies = async () => {
    try {
      //axios.get .....
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9df4de0041ddcca1aa6149be63d6bc0e&language=en-US`);
      setMovies(res.data.results);
      // update pageCount
      setPageCount(res.data.total_pages);
      // console.log(res.data.results);
    } catch (error) {
      //error handling ...
      console.error(error.message)
    }
  }

  // Get Current page
  const getPage = async (pageNumber) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9df4de0041ddcca1aa6149be63d6bc0e&language=en-US&page=${pageNumber}`);
    setMovies(res.data.results);
    // update pageCount
    setPageCount(res.data.total_pages);
  }

  // To execute the function
  useEffect(() => {
    getAllMovies();
  }, [])

  // GET search/movie  ( search in API by axios )
  const searchMovie = async (nameMovie) => {
    if (nameMovie === '') {
      getAllMovies();
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9df4de0041ddcca1aa6149be63d6bc0e&query=${nameMovie}&language=en-US&page=1&include_adult=false`);
      setMovies(res.data.results);
      // update pageCount
      setPageCount(res.data.total_pages);
    }

  }

  return (
    <div className="font color-body ">
      <Navbar searchMovie={searchMovie} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MovieList movies={movies} getPage={getPage} pageCount={pageCount} />}/>
            <Route path='/movie/:id' element={<MovieDetails />}/> 
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div >
  )
}

export default App