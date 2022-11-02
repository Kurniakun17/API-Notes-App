import React from 'react'

export default function SearchBar({keyword,onKeywordChange}) {

  return (
    <div className='search-bar'>
      <input value={keyword} onChange={onKeywordChange}></input>
    </div>
  )
}
