import React from 'react'
import PropTypes from 'prop-types'

import icons from './symbol/icons.svg'

// Style
import './index.less'

const Icon = ({name, className, size, onClick, clickable}) =>
  <svg className={`${name} ${className} ${size} ${clickable ? 'clickable' : ''}`} onClick={onClick}>
    <use xlinkHref={`${icons}#${name}`} />
  </svg>

export default Icon

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  clickable: PropTypes.bool
}

Icon.defaultProps = {
  className: '',
  size: 'regular'
}
