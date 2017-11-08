import React, { Component } from 'react'
// Components
import ChapterIntro from './ChapterIntro'
import ChapterContent from './ChapterContent'
import ChapterRecap from './ChapterRecap'
// Services
import { restGet } from '~/services/api.js'

class Chapters extends Component {
  componentWillMount = async () => {
    const result = await restGet('/chapters/' + this.props.match.params.title)
    if (result) {
      this.setState({ result })
    } else {
      console.log('redirect inc')
    }
  }

  render() {
    console.log('state', this.state)
    return (
      <div>
        <ChapterIntro />
        <ChapterContent />
        <ChapterRecap />
      </div>
    )
  }
}

export default Chapters
