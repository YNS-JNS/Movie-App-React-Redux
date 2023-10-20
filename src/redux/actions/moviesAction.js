import { ALLMOVIES, GET_ALL_MOVIES_API } from '../types/movieType'
import axios from 'axios'

export const getAllMovie = () => {
    // High Order function
    return async (dispatch) => {

        const res = await axios.get(GET_ALL_MOVIES_API);
        // console.log(res.data.results)
        dispatch(
            {
                type: ALLMOVIES,
                data: res.data.results,
                pageCount: res.data.total_pages
            }
        );
    }

}

export const getMovieSearch = (word) => {
    return async (dispatch) => {

        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9df4de0041ddcca1aa6149be63d6bc0e&query=${word}&language=en-US&page=1&include_adult=false`);
    
        dispatch(
            {
                type: ALLMOVIES,
                data: res.data.results,
                pageCount: res.data.total_pages
            }
        );
    }

}

export const getPage = (pageNumber) => {
    return async (dispatch) => {

        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9df4de0041ddcca1aa6149be63d6bc0e&language=en-US&page=${pageNumber}`);
    
        dispatch(
            {
                type: ALLMOVIES,
                data: res.data.results,
                pageCount: res.data.total_pages
            }
        );
    }

}
