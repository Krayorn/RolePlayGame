import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// Style
import './index.less'

const Button = ({content, className, color, size, link}) =>
  link
    ? <Link
      className={`button-link ${className} ${color}-theme ${size} animate `}
      to={link} >
      {content}
    </Link>
    : <button>Design this shit if you need it someday</button>

export default Button


Button.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  link: PropTypes.string,
}

Button.defaultProps = {
  color: 'default',
  size: 'regular',
  className: ''
}
