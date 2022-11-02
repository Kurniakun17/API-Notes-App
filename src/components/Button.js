import React from 'react'
import PropTypes from 'prop-types';

export default function Button({value, func}) {
  return (
    <button className='button' onClick={func}>{value}</button>
  )
}

Button.propTypes={
  value:PropTypes.string.isRequired,
  func:PropTypes.func.isRequired,
}

