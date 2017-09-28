import React, { Component } from 'react'
// Components
import NavBar from '~/components/NavBar'

class DefaultLayout extends Component {
  componentWillMount = () => {
    this.updateDimensions()
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions = () => {
    this.setState({width: window.innerWidth})
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    )
  }
}

export default DefaultLayout
