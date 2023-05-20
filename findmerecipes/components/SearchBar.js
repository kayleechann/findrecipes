import React from 'react';
import classes from './SearchBar.module.scss';

function SearchBar({ searchText, setSearchText }) {
  return (
    <>
    <input
      className={classes.searchcontent}
      value={searchText}
      placeholder='Enter a keyword...'
      onChange={(e) => setSearchText(e.target.value)}
    />

    </>
    
  );
}

export default SearchBar;