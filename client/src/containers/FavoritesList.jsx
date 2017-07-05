import { connect } from 'react-redux'
import { loadFavorites, onClickFavorite } from '../actions/favorites'
import FavoritesListLayout from '../components/FavoritesListLayout.jsx'

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentDidMount: () => { dispatch(loadFavorites()) },
    onClickFavorite: (imageId) => { dispatch(onClickFavorite(imageId)) }
  }
}

const FavoritesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesListLayout)

export default FavoritesList