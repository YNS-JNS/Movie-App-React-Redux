import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const MovieDetails = () => {

    // movieClicked: objet qui conient les attributs du film
    const [movieClicked, setMovieClicked] = useState([])

    const { id } = useParams(); // GET id param from url
    // console.log(id)

    // Get Movie details clicked by axios
    const getMovieClicked = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9df4de0041ddcca1aa6149be63d6bc0e&language=en-US`);
        // console.log(res.data);
        setMovieClicked(res.data);
    }

    // Render component
    useEffect(() => {
        getMovieClicked();
    }, [])

    return (
        <div>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4 ">
                    <div className="card-detalis  d-flex align-items-center ">
                        <img
                            className="img-movie w-30"
                            src={`https://image.tmdb.org/t/p/w500/${movieClicked.poster_path}`}
                            alt="picture of movie"
                        />
                        <div className="justify-content-center text-center  mx-auto">
                            <p className="card-text-details border-bottom">
                                Name: {movieClicked.original_title}
                            </p>
                            <p className="card-text-details border-bottom">
                                Date: {movieClicked.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                Votes: {movieClicked.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                Note: {movieClicked.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end p-4 ">
                            <p className="card-text-title border-bottom">History:</p>
                        </div>
                        <div className="text-start px-2">
                            <p className="card-text-story"> {movieClicked.overview} </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className=" my-2 mt-2 d-flex justify-content-center">
                    <Link to="/">
                        <button
                            style={{ backgroundColor: "#2c3e50", border: "none" }}
                            className="btn btn-primary mx-2">
                            Back To Home
                        </button>
                    </Link>
                    <a href={movieClicked.homepage} target='_blank'>
                        <button
                            style={{ backgroundColor: "#2c3e50", border: "none" }}
                            className="btn btn-primary">
                            Watch it now?
                        </button>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default MovieDetails