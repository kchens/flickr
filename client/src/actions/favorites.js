import axios from 'axios'
export const ON_CLICK_FAVORITE = 'ON_CLICK_FAVORITE'

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
    debugger
    dispatch({ type: ON_CLICK_FAVORITE, newImageData })
  }
}

const toggleFavorite = (isFavorite) => {
  return isFavorite ? 0 : 1
}