import React from 'react'

// Components
import HighlightBox from '~/components/HighlightBox'

// Less
import './index.less'

const Chapters = {
  backgroundImage: 'url(http://flaviobolla.com/images/dun_artorith.jpg?crc=3914925258)',
}

const Caracters = {
  backgroundImage: 'url(https://secure.meetupstatic.com/photos/theme_body/4/9/b/4/full_7158868.jpeg)',
}

const Lore = {
  backgroundImage: 'url(https://i.pinimg.com/originals/dd/3a/73/dd3a738bd3240e949ec53ab592a95b01.jpg)',
}

const Encyclopedia = {
  backgroundImage: 'url(http://geekandsundry.com/wp-content/uploads/2016/11/goblinheader.jpg)',
}

const HomeNav = () => (
  <div className="highlightBox_container">
    <HighlightBox link={'/chapters/0'} style={Chapters}/>
    <HighlightBox link={'/characters'} style={Caracters}/>
    <HighlightBox link={'/lore'} style={Lore}/>
    <HighlightBox link={'/encyclopedia'} style={Encyclopedia}/>
  </div>
)

export default HomeNav
