import React from 'react'
import { Link } from 'react-router'
import ImageCard from './ImageCard.jsx'

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
            return (<ImageCard key={index} image={image} onClickFavorite={onClickFavorite}></ImageCard>)
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
