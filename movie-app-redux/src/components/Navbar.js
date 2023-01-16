import React from 'react'
import { Container, Col, Row } from "react-bootstrap";
import logo from '../images/logo.png';
import { useDispatch } from 'react-redux';
import { getAllMovie, getMovieSearch } from '../redux/actions/moviesAction';

function Navbar() {

    const dispatch = useDispatch();

    // GET search/movie
    const onSearch = async (word) => {
        if (word === '') {
            dispatch(getAllMovie());
        } else {
            dispatch(getMovieSearch(word));
        }

    }

    return (
        <div className="nav-style w-100">
            <Container>
                <Row className="pt-2">
                    <Col xs="2" lg="1">
                        <a href="/">
                            <img className="logo" src={logo} alt="logo" />
                        </a>
                    </Col>
                    <Col xs="10" lg="11" className=" d-flex align-items-center">
                        <div className="search  w-100">
                            {/* icon  */}
                            <i className="fa fa-search"></i>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="search.."
                                onChange={(e) => onSearch(e.target.value)}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Navbar