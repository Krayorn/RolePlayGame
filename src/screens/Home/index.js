import React from 'react'
// Components
import HighlightBox from '~/components/HighlightBox'
// Style and helpers
import * as constants from '~/constant.js'

const Home = () => (
  <div>
    <HighlightBox
      title={`Les chapitres`}
      bgimg='url(https://i.warosu.org/data/tg/img/0288/65/1387078372709.jpg)'
      content={`Vivez l'aventure avec les aventuriers a travers leur journal de bord !`}
      link={constants.linkToChapterIntro}
      buttonText={`Commencer l'aventure...`}
      rolePlayText={constants.rolePlayIntro.Chapters}
    />
    <HighlightBox
      title={`Les Personnages`}
      bgimg='url(https://i.pinimg.com/736x/58/07/f2/5807f2d3973cbb1cd75a3140de6f431f--character-ideas-character-art.jpg)'
      content={`Apprenez en plus sur le passé des aventuriers, et contemplez leur évolution au fur et a mesure de l'histoire`}
      link={constants.linkToCharactersMenu}
      buttonText={`Decouvrez en détails les protagonistes`}
      rolePlayText={constants.rolePlayIntro.Characters}
    />
    <HighlightBox
      title={`Le Lore`}
      bgimg='url(https://i.pinimg.com/originals/73/a4/34/73a4341c60d1bed1ea168856723d7903.jpg)'
      content={`Bienvenue a Dymn, la cité regroupant le savoir de tout Unerbor, vous trouverez forcément ce que vous voulez...`}
      link={constants.linkToLoreMenu}
      buttonText={`Explorez le monde d'Unrebor...`}
      rolePlayText={constants.rolePlayIntro.Lore}
    />
  </div>
)

export default Home
