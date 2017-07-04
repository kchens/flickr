import React from 'react';

class NewAlbumForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      era: '',
      year: '',
      description: '',
      imageURL: ''
    }
  }

  render() {
    return (
      <div>
        Era: <input onChange = { (e) => this.setState({era: e.target.value}) } ></input><br/>
        Year: <input onChange = { (e) => this.setState({year: e.target.value}) }></input><br/>
        Description: <input onChange = { (e) => this.setState({description: e.target.value}) }></input><br/>
        ImageURL: <input onChange = { (e) => this.setState({imageURL: e.target.value}) }></input><br/>
        <button onClick={ () => this.props.submitAlbum(this.state) }>Submit</button>
      </div>
    )
  }
}

export default NewAlbumForm;
