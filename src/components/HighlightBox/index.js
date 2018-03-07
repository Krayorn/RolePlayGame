import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Style
import './index.less'

class HighlightBox extends Component {
  state = {highlighted: false}

  handleMouseEvent = (kind) => {
    this.setState({
      highlighted: kind === 'in'
    })
  }

  render() {
    return (
      <Link onMouseLeave={() => this.handleMouseEvent('out')}
        onMouseEnter={() => this.handleMouseEvent('in')}
        className={this.state.highlighted ? 'highlightBox active' : 'highlightBox' }
        style={this.props.style}
        to={this.props.link}
      >
      </Link>
    )
  }
}

export default HighlightBox
