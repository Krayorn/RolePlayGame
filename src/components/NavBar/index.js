import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// Components
import { Icon } from '~/defaultComponents'
// Style and helpers
import * as constants from '~/constant.js'
import './index.less'

class NavBar extends Component {
  state = { dropDownOpen: false }
  
  handleBurgerClick = () => {
    this.setState({
      dropDownOpen: !this.state.dropDownOpen
    })
  }

  handleBurgerItemClick = (name) => {
    this.setState({
      [name]: !this.state[name]
    })
  }

  handleMousEvent = (name, kind) => {
    this.setState({
      [name]: kind === 'in'
    })
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
          drop.map((item, i) => <Link className={this.state[name] ? 'sub-item active' : 'sub-item' } to={item.link} key={i}>{item.subTitle}</Link>)
          }
        </div>
      </div>
    )
  }

  renderDesktopItem = (name, link, drop) => {
    return (
      <span
        onMouseLeave={() => this.handleMousEvent(name, 'out')}
        onMouseEnter={() => this.handleMousEvent(name, 'in')}
      >
        <Link
        className={this.state[name] ? 'item selected' : 'item'} to={link} >{name}</Link>
          {
            drop &&
            <div className={this.state[name] ? 'sub-items active' : 'sub-items'} >
            {drop.map((item, i) => <Link className='sub-item' key={i} to={item.link}>{item.subTitle}</Link>)}
            </div>
          }
      </span>
    )
  }

  render () {

    return (
        window.innerWidth <= 992
          ? <div className='MobileNavBar'>
              <span onClick={this.handleBurgerClick} className='burger-menu' >☰</span>
                <div className={this.state.dropDownOpen ? 'open mobile-dropdown' : 'close mobile-dropdown'}>
                {this.renderMobileDropDownItem('Home', constants.linkToHome)}
                {this.renderMobileDropDownItem('Chapter', constants.linkToChapterIntro , constants.chapterDrop)}
              </div>
            </div>
          : <div className='DesktopNavBar'>
              <div className='nav-items' >
                {this.renderDesktopItem('Home', constants.linkToHome)}
                {this.renderDesktopItem('Chapter', constants.linkToChapterIntro, constants.chapterDrop)}
              </div>
            </div>
    )
  }
}

export default NavBar