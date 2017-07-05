import { connect } from 'react-redux'
import { loadImages } from '../actions/imageCardList'
import ImageCardListLayout from '../components/ImageCardListLayout.jsx'

const mapStateToProps = (state) => {
  return {
    images: state.images.images
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentDidMount: () => { dispatch(loadImages())}
  }
}

const ImageCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageCardListLayout)

export default ImageCardList