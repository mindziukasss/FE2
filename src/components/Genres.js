import React from 'react';

export default class Genres extends React.Component {

  render() {
    const {genres, onChangeList, addLog, log} = this.props;

    return (
      <div className="genres">
        {genres.map((genre) => (
          <div key={genre.id} className="genre" onClick={() => {
           onChangeList(genre.id);
             addLog("Zanras pakeistas į " + genre.name)
            }}>
             {genre.name}
          </div>
        ))}
      </div>
    );
  }
}
