import React from 'react'

// Components
import HighlightBox from '../HighlightBox'

// Less
import './index.less'

const HomeNav = () => (
  <div className="highlightBox_container">
    <HighlightBox link={'/chapters/0'} kind={'Chapters'}/>
    <HighlightBox link={'/characters'} kind={'Characters'}/>
    <HighlightBox link={'/lore'} kind={'Lore'}/>
    <HighlightBox link={'/encyclopedia'} kind={'Encyclopedia'}/>
  </div>
)

export default HomeNav
