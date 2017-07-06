import React from 'react'
import LikeHeart from './LikeHeart.jsx'

const parseUnixDate = (unix) => {
    var a = new Date(unix);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { image, onClickFavorite } = this.props

    return (
      <div className="flex-column ma4 pa3 bg-light-gray">
        <div className="flex">
          <div className="tl b mr4 mw6">{image.author}</div>
          <div className="tr ml6">{parseUnixDate(image.date_published)} </div>
        </div>
        <img className="ma3" src={image.flickr_url}></img>
        <LikeHeart image={image} onClickFavorite={onClickFavorite}/>
      </div>
    )
  }
}

export default ImageCard;
