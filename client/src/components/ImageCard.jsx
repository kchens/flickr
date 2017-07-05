import React from 'react'

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { image, onClickFavorite } = this.props
    return (
      <div>
        <div>By {image.author}</div>
        <div>Taken on {image.date_taken}</div>
        <div>Published on {image.date_published} </div>
        <img src={image.flickr_url}></img>
        <button onClick={(e) => {
          e.preventDefault()
          onClickFavorite(image)
          }}>Like</button>
      </div>
    )
  }
}

export default ImageCard;
