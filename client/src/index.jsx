import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import AlbumList from './components/AlbumList.jsx';
import NewAlbumForm from './components/NewAlbumForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }
  }

  componentWillMount() {
    // axios('/v1/images?src=flickr')
    //   .then((response) => {
    //     // console.log(response)
    //     // this.setState({
    //     //   albums: response.data
    //     // })
    //     console.log('Added album successfully')
    //   })
    //   .catch((error) => {
    //     console.log("Didn't add album");
    // });
  }

  componentDidMount() {
    axios('/v1/images?src=private&limit=10&lastImageId=10')
      .then((res) => {
        if (res.data.length < 10) {
           axios('/v1/images?src=flickr')
        }
        this.setState({ images: res.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const { images } = this.state
    // console.log(albums)
    // const albums = this.state.albums ? this.state.albums[0] : null
    const string = JSON.stringify(this.state.images)
    return (
      <div>
        Yolo
        { string }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));