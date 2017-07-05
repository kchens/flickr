import React from 'react'
import { Link } from 'react-router'

class ImageCardListLayout extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { onComponentDidMount, fetchNextFlickrImages} = this.props
    onComponentDidMount()
    setInterval( () => {
      fetchNextFlickrImages()
    }, 60000)
  }

  render() {
    const { images, onClickLoadMoreImages, onClickFavorite } = this.props
    return (
      <div>
        <Link to={`/favorites`}>Favorites</Link>
        { images.map((image, index) => {
            return (<div key={index}>
              <div>By {image.author}</div>
              <div>Taken on {image.date_taken}</div>
              <div>Published on {image.date_published} </div>
              <img src={image.flickr_url}></img>
              <button onClick={(e) => {
                e.preventDefault()
                onClickFavorite(image)
                }}>Like</button>
            </div>)
          }
        )}
        <a onClick={(e) => {
          e.preventDefault()
          onClickLoadMoreImages()
          }}>Load Next 10</a>
      </div>
    )
  }
}

export default ImageCardListLayout;
