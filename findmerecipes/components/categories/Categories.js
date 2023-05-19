import React from 'react'
import classes from './Categories.module.scss'
import CategoryItem from './CategoryItem.js'

function Categories({
    categories,
    categoriesIsLoading,
    categoriesIsError, 
    selectedCategory,
    setSelectedCategory
}) {

    if (categoriesIsLoading){
        return (
            <div>Is Loading</div>
        )
    }

    if (categoriesIsError){
        return (
            <div>Error!</div>
        )
    }

  return (
    <>
    <div className={classes.categories}> 
    {categories.map(item => (
        <CategoryItem category={item} key={item.idCategory} selectedCategory={selectedCategory}
        onClickHandler={() => setSelectedCategory(item.strCategory)}>{item.strCategory}</CategoryItem>
    ))}
    </div>
    </>
    
  );
}

export default Categories