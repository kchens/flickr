import React from 'react'

class LikeHeart extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { image, onClickFavorite } = this.props

    const heartColor = image.is_favorite ? "tl red" : "tl blue"
    return(
      <div className={heartColor}>
        <a onClick={(e) => {
          e.preventDefault()
          onClickFavorite(image)
          }}>&#9829;</a>
      </div>
    )
  }
}

export default LikeHeart;