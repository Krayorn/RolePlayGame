import React from 'react'
import { Link } from 'react-router-dom'

// Style
import './index.less'

//constants
import { rolePlayIntro, homeBackground } from '~/constant'

const HighlightBox = (props) => {
  return (
    <Link
      className='highlightBox'
      style={homeBackground[props.kind].homeBackground}
      to={props.link}
    >
      <div className='highlightBox-content' >
        <h1 className='highlightBox-title' >{homeBackground[props.kind].title}</h1>
        <div className='highlightBox-text' >
          {rolePlayIntro[props.kind]}
        </div>
      </div>
    </Link>
  )
}

export default HighlightBox
