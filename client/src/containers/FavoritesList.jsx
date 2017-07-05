import { connect } from 'react-redux'
// import { loadImages, loadNextImages, fetchNextFlickrImages } from '../actions/imageCardList'
import FavoritesListLayout from '../components/FavoritesListLayout.jsx'

const mapStateToProps = (state) => {
  return {
    // images: state.images,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onComponentDidMount: () => { dispatch(loadImages()) },
    // onClickLoadMoreImages: () => { dispatch(loadNextImages()) },
    // fetchNextFlickrImages: () => { dispatch(fetchNextFlickrImages()) }
  }
}

const FavoritesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesListLayout)

export default FavoritesList