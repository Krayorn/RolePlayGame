import React, { Component } from 'react'
// Components
import ChapterIntro from './ChapterIntro'
import ChapterContent from './ChapterContent'
import ChapterRecap from './ChapterRecap'
// Services
import { restPost } from '~/services/api.js'

class Chapters extends Component {
  componentWillMount = async () => {
    const result = await restPost('/chapters', {title: this.props.match.params.title})
    this.setState({ result })
    console.log(result)
  }

  render() {
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
