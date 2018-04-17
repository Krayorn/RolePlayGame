import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// Components
import { Icon } from '~/defaultComponents'

// Redux
import { getAll } from '~/redux/actions/chapters'

// Style and helpers
import { isDesktop } from '~/services/utils'
import * as constants from '~/constant'
import './index.less'

class NavBar extends Component {
  state = { dropDownOpen: false }

  componentWillMount() {
    this.props.getAll()
  }

  handleBurgerClick = () => {
    this.setState(previousState => ({dropDownOpen: !previousState.dropDownOpen}))
  }

  handleBurgerItemClick = (name) => {
    this.setState(previousState => ({[name]: !previousState[name]}))
  }

  renderMobileDropDownItem = (name, link, drop) => {
    return (
      <div className='drop-down-item'>
        <div className='item-line'>
          <Link
            className='main-item'
            to={link} >
            {name}
          </Link>
          {
            drop &&
            <Icon
              clickable
              className={this.state[name] ? 'active animate' : 'animate'}
              name='arrow-right'
              size='regular'
              onClick={() => this.handleBurgerItemClick(name)} />
          }
        </div>
        <div className='sub-item-list' >
          {
            drop &&
            drop.map((item, i) => <Link
              className={this.state[name] ? 'sub-item active' : 'sub-item' }
              to={`/chapters/${item.number}`}
              key={i}>
              {item.title}
            </Link>)
          }
        </div>
      </div>
    )
  }

  renderDesktopItem = (name, link, drop) => {
    return (
      <span className='desktop-item' >
        <Link
          className='item' to={link} >{name}</Link>
        {
          drop &&
          <div className='sub-items' >
            {drop.map((item, i) => <Link className='sub-item' key={i} to={`/chapters/${item.number}`}>{item.title}</Link>)}
          </div>
        }
      </span>
    )
  }

  render () {
    return (
      !isDesktop()
        ? <div className='MobileNavBar'>
          <span onClick={this.handleBurgerClick} className='burger-menu' >☰</span>
          <div className={this.state.dropDownOpen ? 'open mobile-dropdown' : 'close mobile-dropdown'}>
            {this.renderMobileDropDownItem('Home', constants.linkToHome)}
            {this.renderMobileDropDownItem('Chapter', constants.linkToChapterIntro , this.props.chaptersList)}
          </div>
        </div>
        : <div className='DesktopNavBar'>
          <div className='nav-items' >
            {this.renderDesktopItem('Home', constants.linkToHome)}
            {this.renderDesktopItem('Chapter', constants.linkToChapterIntro, this.props.chaptersList)}
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  chaptersList: state.chapters.list || []
})

const mapDispatchToProps = (dispatch) => ({
  getAll: () => dispatch(getAll()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

