import axios from 'axios'
export const ON_CLICK_FAVORITE = 'ON_CLICK_FAVORITE'
export const ON_CLICK_FAVORITE_FROM_FAVORITES = 'ON_CLICK_FAVORITE'
export const ON_FAVORITES_LIST_MOUNT = 'ON_FAVORITES_LIST_MOUNT'

export const onClickFavorite = (data) => {
  return (dispatch) => {
    const newIsFavorite = toggleFavorite(data.is_favorite)
    const newData = {
      imageId: data.id,
      isFavorite: newIsFavorite
    }

    axios.post('/v1/favorites', newData )
    .then((res) => {
      console.log("Added image as a favorite")
      //dispatch an action
    })
    .catch((err) => {
      console.log(err)
    })

    const newImageData = Object.assign( {}, data, {is_favorite: newIsFavorite } )
    dispatch({ type: ON_CLICK_FAVORITE, newImageData })
    dispatch({ type: ON_CLICK_FAVORITE_FROM_FAVORITES, newImageData })
  }
}

const toggleFavorite = (isFavorite) => {
  return isFavorite ? 0 : 1
}

export const loadFavorites = () => {
  return (dispatch) => {
    const url = `/v1/favorites`
    axios(url)
    .then((res) => {
      const favorites = res.data
      dispatch({ type: ON_FAVORITES_LIST_MOUNT, favorites })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}