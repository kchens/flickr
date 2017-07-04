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

  componentDidMount() {
    // let header = new Headers({
    //   'Access-Control-Allow-Origin':'*',
    //   'Content-Type': 'multipart/form-data'
    // });
    // let sentData={
    //   mode: 'cors',
    //   header: header,
    //   body: ''
    // };
    console.log('getting flickr')
    axios('/v1/images?src=flickr')
    .then((response) => {
      console.log(response)
      // this.setState({
      //   albums: response.data
      // })
      console.log('Added album successfully')
    })
    .catch((error) => {
      console.log("Didn't add album");
    });
  }

  render() {
    // const { albums } = this.state
    // console.log(albums)
    // const albums = this.state.albums ? this.state.albums[0] : null
    // console.log(albums[0].description)
    return (
      <div>
        <AlbumList albums = {this.state.albums} />
        Yolo
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));