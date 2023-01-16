import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import NotFound from './NotFound'
import Pagination from './Pagination'
import { useSelector, useDispatch } from 'react-redux';
import { getAllMovie } from '../redux/actions/moviesAction';

function MovieList() {

    // Hooks
  const [movies, setMovies] = useState([]);

  //----------------redux-----------------------
  const dispatch = useDispatch();
  // To execute the function
  useEffect(() => {
    dispatch(getAllMovie()); 
  }, [])

  // --- Get movies data by redux
  const dataMovies = useSelector((state) => state.movies) 
  // Set movies data to our movies Hook
  useEffect(() => {
    setMovies(dataMovies)
  }, [dataMovies])
  //----------------------------------------------

    return (
        <>
            <Row className="mt-3">
                {
                    movies.length >= 1 ?
                        (
                            movies.map((film) => {
                                return (
                                    <CardMovie key={film.id} film={film} />
                                )
                            })
                        ) :
                        <NotFound />
                }
                {
                   movies.length >= 1 ? (<Pagination />) : null
                }
            </Row>
        </>
    )
}

export default MovieList