import React from 'react'

export default function Button({value, func}) {
  return (
    <button className='button' onClick={func}>{value}</button>
  )
}
