import React from 'react';
import ImageCard from './ImageCard.jsx'
import TopNavBar from './TopNavBar.jsx'

class FavoritesListLayout extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.onComponentDidMount()
  }

  render() {
    const { favorites, onClickFavorite } = this.props
    return (
      <div>
        <TopNavBar pageName="Your Favorites" pageLink="/" pageLinkName="Home"/>
        <div className="ma4 flex-column mw6 center">
          { favorites.map((image, index) => {
              return (<ImageCard key={index} image={image} onClickFavorite={onClickFavorite}></ImageCard>)
            }
          )}
        </div>
      </div>
    )
  }
}

export default FavoritesListLayout;
