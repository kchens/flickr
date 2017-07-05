import axios from 'axios'
export const ON_IMAGE_CARD_LIST_MOUNT = 'ON_IMAGE_CARD_LIST_MOUNT'
export const ON_INFINITE_SCROLL = 'ON_INFINITE_SCROLL'
export const FETCH_NEXT_FLICKR_IMAGES = 'FETCH_NEXT_FLICKR_IMAGES'

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

export const loadNextImages = (lastImageId) => {
  return (dispatch, getState) => {
    const { images } = getState()
    const lastImageId = images[images.length-1].id
    const url = `/v1/images?src=private&limit=10&lastImageId=${lastImageId}`
    axios(url)
    .then((res) => {
      if (res.data.length < 10) {
          axios('/v1/images?src=flickr')
      }
      const images = res.data
      dispatch({ type: ON_INFINITE_SCROLL, images })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export const fetchNextFlickrImages = () => {
  return (dispatch) => {
    axios('/v1/images?src=flickr')
    .then((res) => {
      const images = res.data
      dispatch({ type: FETCH_NEXT_FLICKR_IMAGES, images })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
