import { combineReducers } from 'redux';

const date = new Date();

const initialMovieState = {
  list: [],
};

const initialGenreState = {
    list: [],
};

const initialHeartedState = {
    list: [],
};

const initialLogsState = {
    list: [],
};

const moviesReducer = (state = initialMovieState, action) => {
    switch (action.type) {
        case 'SET_MOVIE_LIST':
            return { ...state, list: action.list };
        default:
            return state;
    }
};

const genresReducer = (state = initialGenreState, action) => {
    switch (action.type) {
        case 'SET_GENRE_LIST':
            return { ...state, list: action.list };
        default:
            return state;
    }
};

const heartedReducer = (state = initialHeartedState, action) => {
    switch (action.type) {
        case 'ADD_HEARTED':
            return { ...state, list: [ ...state.list, action.id] };
        case 'REMOVE_HEARTED':
            return { ...state, list: action.list.filter((currentId) => currentId !== action.id) };
        default:
            return state;
    }
};

const logsReducer = (state = initialLogsState, action) => {
    switch (action.type) {
        case 'LOG':
            let log = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+": \""+action.log+"\"";
            console.log(log);
            return {...state, list: [...state.list, log]};
        default:
            return state
    }
};

export default combineReducers({
    movies: moviesReducer,
    genres: genresReducer,
    hearted: heartedReducer,
    logs: logsReducer,
});