import { ON_IMAGE_CARD_LIST_MOUNT, ON_INFINITE_SCROLL, FETCH_NEXT_FLICKR_IMAGES} from '../actions/imageCardList'
import { ON_CLICK_FAVORITE } from '../actions/favorites'

const DEFAULT_STATE = []

const images = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ON_IMAGE_CARD_LIST_MOUNT:
      let newState = Object.assign({}, state, {images: action.images})
      return newState.images
    case ON_INFINITE_SCROLL:
      return state.concat(action.images)
    case FETCH_NEXT_FLICKR_IMAGES:
      return action.images.concat(state)
    case ON_CLICK_FAVORITE:
      return state.map((image) => {
        if (action.newImageData.id === image.id) {
          return action.newImageData
          }
        return image
      })
    default:
      return state
  }
}

export default images