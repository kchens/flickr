import { connect } from 'react-redux'
import { loadImages, loadNextImages } from '../actions/imageCardList'
import ImageCardListLayout from '../components/ImageCardListLayout.jsx'

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentDidMount: () => { dispatch(loadImages()) },
    onClickLoadMoreImages: () => { dispatch(loadNextImages()) }
  }
}

const ImageCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageCardListLayout)

export default ImageCardList