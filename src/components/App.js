import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import { setMovieList } from '../actions';
import { getPopularMovies } from '../thunks';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      hearted: [],
    };
  }

  componentDidMount() {
    const { onGetPopularMovies } = this.props;

    onGetPopularMovies();
  }

  setMovieList = (movieList) => {
    this.setState({
      movieList,
    })
  };

  addHeart = (id) => {
    const { hearted } = this.state;

    this.setState({
      hearted: [ ...hearted, id ],
    })
  };

  removeHeart = (id) => {
    const { hearted } = this.state;

    this.setState({
      hearted: hearted.filter((currentId) => currentId !== id),
    })
  };

  render() {
    const { hearted } = this.state;
    const { movies } = this.props;

    return (
      <React.Fragment>
        <Genres onChangeList={this.setMovieList} />

        <div className="cards">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              isHearted={hearted.includes(movie.id)}
              onAddHeart={() => this.addHeart(movie.id)}
              onRemoveHeart={() => this.removeHeart(movie.id)}
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
    };
  },
  (dispatch) => {
    return {
      onGetPopularMovies: () => dispatch(getPopularMovies()),
      onSetMovieList: (list) => dispatch(setMovieList(list)),
    };
  }
)(App);
