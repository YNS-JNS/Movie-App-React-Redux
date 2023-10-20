import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Container } from "react-bootstrap";
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import NotFound from './components/NotFound';

const App = () => {
  
  return (
    <div className="font color-body ">
      <Navbar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/'           element={<MovieList />}     />
            <Route path='/movie/:id'  element={<MovieDetails />}  />
            <Route path='*'           element={<NotFound />}      />
          </Routes>
        </BrowserRouter>
      </Container>
    </div >
  )
}

export default App