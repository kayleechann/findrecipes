import clsx from 'clsx';
import React from 'react';
import styles from './CategoryItem.module.css';

function CategoryItem({ category, selectedCategory, onClickHandler }) {
  // check if category is being selected, update css based on it
  const isSelected = category.strCategory === selectedCategory;

  return (
    <button
      type="button"
      className={clsx(styles.item, isSelected && styles.item__selected)}
      onClick={onClickHandler}
    >
      {category.strCategory}  

    </button>
  );
}
 
export default CategoryItem;