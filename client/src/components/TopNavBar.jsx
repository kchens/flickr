import React from 'react'
import { Link } from 'react-router'
import ImageCard from './ImageCard.jsx'

class TopNavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { pageName, pageLinkName, pageLink } = this.props
    return(
      <div className="db bb b--silver ma1 pa3 tc bg-light-gray">
        <h1 className="pa1 bg-light-gray">{pageName}</h1>
        <Link className="no-underline bg-yellow br1 pa2 blue" to={pageLink}>{pageLinkName}</Link>
      </div>
    )
  }
}

export default TopNavBar;