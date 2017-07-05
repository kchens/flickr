import axios from 'axios'
export const ON_IMAGE_CARD_LIST_MOUNT = 'ON_IMAGE_CARD_LIST_MOUNT'

export const loadImages = () => {
  return (dispatch) => {
    axios('/v1/images?src=private&limit=10&lastImageId=10')
    .then((res) => {
      if (res.data.length < 10) {
          axios('/v1/images?src=flickr')
      }
      const images = res.data
      dispatch({ type: ON_IMAGE_CARD_LIST_MOUNT, images })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}