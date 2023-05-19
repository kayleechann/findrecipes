import React from 'react';
import classes from './SearchBar.module.scss';

function SearchBar({ searchText, setSearchText }) {
  return (
    <>
    <input
      className={classes.searchcontent}
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
    <button type="submit" className={classes.searchbtn} id='searchbtn'>Search</button>
    </>
    
  );
}

export default SearchBar;