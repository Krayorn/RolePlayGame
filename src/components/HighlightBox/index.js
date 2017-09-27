import React, { Component } from 'react'
import { Button, Icon } from '~/defaultComponents'
// Style
import './index.less'

class HighlightBox extends Component {
  state= { open: false }

  componentWillMount = () => {
    this.updateDimensions()
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions)
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions)
  }

  updateDimensions = () => {
      this.setState({width: window.innerWidth});
  }

  handleArrowClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      window.innerWidth <= 992
      ? <div style={{'backgroundImage': this.props.bgimg}} className='background-img mobile'>
          <div className='HighlightBox' >
            <p className='title-line'>
              <span className='line' />
              <span className='title'>{this.props.title}</span>
              <span className='line' />
            </p>
            <p className='content' >{this.props.content}</p>
            <Button
              link={this.props.link}
              content={this.props.buttonText}
              className='button'
              color='dark'
            />
          </div>
        </div>
      : <div style={{'backgroundImage': this.props.bgimg}} className='background-img desktop'>
          <div className='HighlightBox' >
            <p className='title-line'>
              <span className='line top left' />
              <span className='title'>{this.props.title}</span>
              <span className='line top right' />
            </p>
            <div className='box-content' >
              <div className='box-left' >
                <div className='box-menu'>
                  <ul>
                    <li>Vivez l'aventure du point de vue des aventuriers</li>
                    <li>Tentez de résoudre les éngimes et avancez dans l'intrigue en même temps qu'eux</li>
                    <li>Suivez leur évolutions au fil des chapitres, équipements, compétences...</li>
                    <li>Observez les liens... ou les tensions se créer dans le groupe</li>
                  </ul>
                </div>
                <Icon
                  onClick={this.handleArrowClick}
                  className='hidden-arrow'
                  name='double-arrow-right'
                  clickable
                />
              </div>

              <div className={this.state.open ? 'middle-content middle-open' : 'middle-content'}>
                <p>
                  {this.props.rolePlayText}
                </p>
              </div>

              <div className={ this.state.open ? 'cta-hidden box-cta' : 'box-cta'} >
                <Button
                  color='light'
                  content={this.props.buttonText}
                  link={this.props.link}
                />
              </div>
            </div>
            <div>
              <span className='line bottom left' />
              <span className='line bottom right' />
            </div>
          </div>
        </div>
    )
  }
}

export default HighlightBox
