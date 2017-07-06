import React from 'react'
import { Link } from 'react-router'
import ImageCard from './ImageCard.jsx'
import TopNavBar from './TopNavBar.jsx'

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
        <TopNavBar pageName="Flickr App" pageLink="/favorites" pageLinkName="Favorites"/>
        <div className="ma4">
          { images.map((image, index) => {
              return (<ImageCard key={index} image={image} onClickFavorite={onClickFavorite}></ImageCard>)
            }
          )}
        </div>
        <div className="pa4 bg-light-gray">
          <a className="ma3 b bg-yellow pa3 br1 blue" onClick={(e) => {
              e.preventDefault()
              onClickLoadMoreImages()
              }}>Load Next 10</a>
        </div>
      </div>
    )
  }
}

export default ImageCardListLayout;
