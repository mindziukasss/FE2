import axios from 'axios';
import { endpoints } from '../config';
import { setMovieList, setGenreList, addHeart, removeHeart } from './actions';

export const getPopularMovies = () => (dispatch) => {
  axios
    .get(endpoints.mostPopularMovies())
    .then((res) => dispatch(setMovieList(res.data.results)))
    .catch((error) => console.log(error));
};

export const getGenreList = () => (dispatch) => {
    axios
        .get(endpoints.genres())
        .then((res) => dispatch(setGenreList(res.data.genres)))
        .catch((error) => console.log(error));
};

export const getGenreMovies = (id) => (dispatch) => {
    axios
        .get(endpoints.genreMovies(id))
        .then((res) => dispatch(setMovieList(res.data.results)))
        .catch((error) => console.log(error));
};

export const getLike = (id,hearted) => (dispatch) => {
    dispatch(addHeart(id,hearted));
};

export const getDislike = (id,hearted) => (dispatch) => {
    dispatch(removeHeart(id,hearted));
};