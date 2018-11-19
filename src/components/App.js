import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import { setMovieList, setGenreList, addLog } from '../actions';
import { getPopularMovies, getGenreList, getGenreMovies, getLike, getDislike } from '../thunks';

class App extends React.Component {
    componentDidMount() {
        const { onGetPopularMovies, onGetGenres, onSetLogList} = this.props;
        onGetPopularMovies();
        onGetGenres();
        onSetLogList("Aplikacija uzkrauta");
    };

    render() {
        const { movies, genres, hearted, onGetGenreMovies, onLike, onDislike, logs, onSetLogList } = this.props;

        return (
            <React.Fragment>
                <Genres genres={genres}
                        logs={logs}
                        addLog={onSetLogList}
                        onChangeList={onGetGenreMovies} />

                <div className="cards">
                    {movies.map((movie) => (
                        <Card
                            key={movie.id}
                            isHearted={hearted.includes(movie.id)}
                            onAddHeart={() => onLike(movie.id,hearted)}
                            onRemoveHeart={() => onDislike(movie.id,hearted)}
                            addLogLike={() => onSetLogList("Uzdeta sirdelė filmui " + movie.original_title)}
                            addLogDislike={() => onSetLogList("Nuimta sirdelė filmui " + movie.original_title)}
                            movie={movie}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
  (state) => {
    return {
      movies: state.movies.list,
      genres: state.genres.list,
      hearted: state.hearted.list,
      logs: state.logs.list,
     };
  },
  (dispatch) => {
    return {
      onGetPopularMovies: () => dispatch(getPopularMovies()),
      onSetMovieList: (movieList) => dispatch(setMovieList(movieList)),
      onGetGenres: () => dispatch(getGenreList()),
      onSetGenreList: (genreList) => dispatch(setGenreList(genreList)),
      onGetGenreMovies: (id) => dispatch(getGenreMovies(id)),
      onLike: (id, hearted) => dispatch(getLike(id,hearted)),
      onDislike: (id, hearted) => dispatch(getDislike(id,hearted)),
      onSetLogList: (log) => dispatch(addLog(log)),
    };
  }
)(App);
