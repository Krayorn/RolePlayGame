import React, { Component } from 'react'
// Components
import ChapterIntro from './ChapterIntro'
import ChapterContent from './ChapterContent'
import ChapterRecap from './ChapterRecap'

class Chapters extends Component {

  // Request chapter to db

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
