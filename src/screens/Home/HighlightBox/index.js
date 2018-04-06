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
      style={homeBackground[props.kind]}
      to={props.link}
    >
      <div>
        {rolePlayIntro[props.kind]}
      </div>
    </Link>
  )
}

export default HighlightBox
