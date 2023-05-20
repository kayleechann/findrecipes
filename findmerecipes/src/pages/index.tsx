import styles from './index.module.css'
import SearchBar from '../../components/SearchBar.js'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Categories from '../../components/categories/Categories.js'
import React, { useEffect, useState } from 'react'
import SingleMeal from '../../components/SingleMeal.js'

const getCategories = async () => {
  const { data } = await axios.get('/categories.php');
  return data.categories;
}

const getMeals = async ({ queryKey }:any) => {
  const { data } = await axios.get(`/filter.php?c=${queryKey[1]}`);
  return data?.meals || [];
}

const getQueriedMeals = async ({ queryKey }:any ) => {
  const { data } = await axios.get(`search.php?s=${queryKey[1]}`);
  return data?.meals || [];
};


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');
  const { data: categories, isLoading: categoriesIsLoading, isError: categoriesIsError } = useQuery(['categories'], getCategories);
  const { data, isLoading, isError } = useQuery(['mealsByCategory', selectedCategory], getMeals,
    { enabled: query === '' });
  const { data: queriedData, isLoading: queryIsLoading } = useQuery(['mealsbyquery', query], getQueriedMeals,
    { enabled: query !== '' });


  // select first category as default
  useEffect(() => {
    if (categories) {
      setSelectedCategory(categories[0].strCategory);
    }
  }, [categories]);


  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText) {
        setQuery(searchText);
        setSelectedCategory('');
      } else {
        setQuery('');
        if (categories) {
          setSelectedCategory(categories[0].strCategory);
        }
      }
    }, 300);
    return (() => {
      setQuery('');
      clearTimeout(timeout);
    })
  }, [searchText, categories]);


  return (
    <div className={styles.container}>
      <div className={styles.mealwrapper}>
        <div className={styles.mealsearch}>
          <h1 className={styles.title}>Find Recipes by Ingredients</h1>
          <p>Need meal inspiration? Search for recipes based on the ingredients you have!</p>
          <div className={styles.mealsearchbox}>
            {/* <input type="text" className={styles.searchcontent} placeholder='Enter an ingredient...' id="searchinput"></input>
              <button type="submit" className={styles.searchbtn} id='searchbtn'>Search</button> */}
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
          </div>
        </div>
        <div className={styles.categoriescontainer}>
        <Categories categories={categories}
          categoriesIsLoading={categoriesIsLoading}
          categoriesIsError={categoriesIsError}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setQuery={setQuery}></Categories>

        </div>
       

      </div>

      <div className={styles.meals_container}>
        {!isLoading && !isError &&
          data && data.map((meal:any) => (
            <SingleMeal meal={meal} key={meal.idMeal} />
          ))
        }

        {
          !queryIsLoading && queriedData &&
          queriedData.map((meal:any) => (
            <SingleMeal meal={meal} key={meal.idMeal} />
          ))
        }
      </div>
    </div>
  )
}
