import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBar({keyword,onKeywordChange}) {

  function onChange(e){
    onKeywordChange(e.target.value)
  }

  return (
    <div className='search-bar'>
      <input value={keyword} onChange={onChange}></input>
    </div>
  )
}

SearchBar.propTypes={
  keyword:PropTypes.string,
  onKeywordChange:PropTypes.func.isRequired
}