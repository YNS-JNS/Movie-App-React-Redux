import React from 'react'
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import Flip from 'react-reveal/Flip'; // Fro Animation React

function CardMovie({ film }) {
    return (
        <>
            <Col xs="6" sm="6" md="4" lg="3" className="my-1">
                {/* <Flip left> */}
                <Link to={`/movie/${film.id}`}>
                    <div className='card'>
                        <img alt="img" src={`https://image.tmdb.org/t/p/w500/` + film.poster_path} className="card__image" />
                        <div className="card__overlay">
                            <div className="overlay__text text-center w-100 p-2">
                                <p>Name: {film.original_title} </p>
                                <p>Date: {film.release_date} </p>
                                <p>Votes: {film.vote_count} </p>
                                <p>Note: {film.vote_average} </p>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* </Flip> */}
            </Col>
        </>
    )
}

export default CardMovie