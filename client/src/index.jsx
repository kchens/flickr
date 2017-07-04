import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import ImageCardList from './components/ImageCardList.jsx';
import "./index.css";

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
    console.log(images)
    console.log('--------')
    return (
      <div className="mw6">
        <div className="orange">Flickr App</div>
        <ImageCardList images={images}></ImageCardList>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));