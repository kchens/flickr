import { ON_IMAGE_CARD_LIST_MOUNT } from '../actions/imageCardList'

const DEFAULT_STATE = {
    images: []
}

const images = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ON_IMAGE_CARD_LIST_MOUNT:
      const newState = Object.assign({}, state, {images: action.images})
      return newState
    default:
      return state
  }
}

export default images