import React from 'react';

class ImageCardListLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onComponentDidMount()
  }

  render() {
    return (
      <div>
        {this.props.images.map((image, index) => {
            return (<div key={index}>
              <div>By {image.author}</div>
              <div>Taken on {image.date_taken}</div>
              <div>Published on {image.date_published} </div>
              <img src={image.flickr_url}></img>
            </div>)
          }
        )}
      </div>
    )
  }
}

export default ImageCardListLayout;
