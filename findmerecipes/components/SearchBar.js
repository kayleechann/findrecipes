import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ searchText, setSearchText }) {
  return (
    <>
    <input
      className={styles.searchcontent}
      value={searchText}
      placeholder='Enter a keyword...'
      onChange={(e) => setSearchText(e.target.value)}
    />

    </>
    
  );
}

export default SearchBar;