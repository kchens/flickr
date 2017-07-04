import React from 'react';

class AlbumList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.albums.map((album) =>
          <ul key = { album.id } >
              <h4>{ album.era } ({ album.year })</h4>
              <p>{ album.description }</p>
              <img src= { album.imageUrl} />
          </ul>
        )}
      </div>
    )
  }
}

export default AlbumList;
