import React, { Component } from 'react'
// Style
import './index.less'

class HighlightBox extends Component {
  render() {
    return (
      <div className="highlightBox" style={this.props.style}></div>
    )
  }
}

export default HighlightBox
