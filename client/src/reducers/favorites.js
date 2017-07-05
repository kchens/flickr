import { ON_FAVORITES_LIST_MOUNT, ON_CLICK_FAVORITE_FROM_FAVORITES } from '../actions/favorites'

const DEFAULT_STATE = []

const favorites = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ON_FAVORITES_LIST_MOUNT:
      let newState = Object.assign({}, state, {favorites: action.favorites})
      return newState.favorites
    case ON_CLICK_FAVORITE_FROM_FAVORITES:
      return state.map((favorite) => {
        if (action.newImageData.id === favorite.id) {
          return action.newImageData
          }
        return favorite
      })
    default:
      return state
  }
}

export default favorites