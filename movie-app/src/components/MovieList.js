import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import NotFound from './NotFound'
import Pagination from './Pagination'

function MovieList({ movies, getPage, pageCount }) {
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
                   movies.length >= 1 ? (<Pagination getPage={getPage} pageCount={pageCount} />) : null
                }
            </Row>
        </>
    )
}

export default MovieList