import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import ChapterIntro from './ChapterIntro'
import ChapterContent from './ChapterContent'
import ChapterRecap from './ChapterRecap'

// Redux
import { getOne } from '~/redux/actions/chapters'

class Chapters extends Component {
  componentWillMount () {
    this.props.getOne(this.props.match.params.number)
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

const mapStateToProps = (state) => ({
  chapter: state.chapters.single || {}
})

const mapDispatchToProps = (dispatch) => ({
  getOne: (number) => dispatch(getOne(number)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chapters)

