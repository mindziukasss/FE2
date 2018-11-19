export const setMovieList = (list) => ({
  type: 'SET_MOVIE_LIST',
  list,
});

export const setGenreList = (list) => ({
    type: 'SET_GENRE_LIST',
    list,
});

export const addHeart = (id, list) => ({
    type: 'ADD_HEARTED',
    list,
    id,
});

export const removeHeart = (id, list) => ({
    type: 'REMOVE_HEARTED',
    list,
    id,
});

export const addLog = (log) => ({
    type: 'LOG',
    log
});