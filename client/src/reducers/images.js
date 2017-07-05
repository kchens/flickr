import { ON_IMAGE_CARD_LIST_MOUNT, ON_INFINITE_SCROLL } from '../actions/imageCardList'

const DEFAULT_STATE = []

const images = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ON_IMAGE_CARD_LIST_MOUNT:
      let newState = Object.assign({}, state, {images: action.images})
      return newState.images
    case ON_INFINITE_SCROLL:
      newState = Object.assign({}, state, {images: action.images})
      return newState.images
    default:
      return state
  }
}

export default images