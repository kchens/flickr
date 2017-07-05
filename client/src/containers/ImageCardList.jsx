import { connect } from 'react-redux'
import { loadImages, loadNextImages, fetchNextFlickrImages } from '../actions/imageCardList'
import ImageCardListLayout from '../components/ImageCardListLayout.jsx'

const mapStateToProps = (state) => {
  return {
    images: state.images,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentDidMount: () => { dispatch(loadImages()) },
    onClickLoadMoreImages: () => { dispatch(loadNextImages()) },
    fetchNextFlickrImages: () => { dispatch(fetchNextFlickrImages()) }
  }
}

const ImageCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageCardListLayout)

export default ImageCardList