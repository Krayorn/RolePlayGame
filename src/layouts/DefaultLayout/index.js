import React, { Component } from 'react'

// Components
import NavBar from '~/components/NavBar'
import Footer from '~/components/Footer'

class DefaultLayout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default DefaultLayout
