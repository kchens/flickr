import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

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
    const { images, onClickLoadMoreImages } = this.props
    return (
      <div>
        { images.map((image, index) => {
            return (<div key={index}>
              <div>By {image.author}</div>
              <div>Taken on {image.date_taken}</div>
              <div>Published on {image.date_published} </div>
              <img src={image.flickr_url}></img>
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
