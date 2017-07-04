import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import AlbumList from './components/AlbumList.jsx';
import NewAlbumForm from './components/NewAlbumForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    }
  }

  componentWillMount() {
    axios('/v1/images?src=flickr')
      .then((response) => {
        // console.log(response)
        // this.setState({
        //   albums: response.data
        // })
        console.log('Added album successfully')
      })
      .catch((error) => {
        console.log("Didn't add album");
    });
  }

  componentDidMount() {
    axios('/v1/images?src=private&limit=10&lastImageId=10')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    // const { albums } = this.state
    // console.log(albums)
    // const albums = this.state.albums ? this.state.albums[0] : null
    // console.log(albums[0].description)
    return (
      <div>
        Yolo
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));