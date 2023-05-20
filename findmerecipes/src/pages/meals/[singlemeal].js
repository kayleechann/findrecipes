import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import classes from './MealPage.module.scss'
import Ingredients from '../../../components/Ingredients.js'

const getSingleMeal = async ({ queryKey }) => {
  // api search for specific item
  const { data } = await axios.get(`./lookup.php?i=${queryKey[1]}`);
  return data?.meals?.[0];
}

function SinglePage() {
  // get meal id from query
  const router = useRouter();
  const { singlemeal } = router.query;
  const { data, isLoading, isError } = useQuery(['singleMeal', singlemeal], getSingleMeal);

  if (isError) {
    return (
      <h1>error</h1>
    )
  }

  if (isLoading) {
    return (
      <div>
        <h1>isLoadinggggg</h1>
      </div>
    )
  }

  // formatting ingredients
  const ingredients = Object.keys(data).filter((key) => key.startsWith('strIngredient')).filter((key) => data[key] !== '' && data[key] !== null);

  const ingredientsWithMeasures = ingredients.map((key, index) => ({
    index: index + 1,
    ingredient: data[key],
    measure: data[`strMeasure${index + 1}`],
  }));

  return (
    <div className={classes.pagewrapper}>
      <div className={classes.info}>
        <h1 className={classes.mealname}>{data.strMeal}</h1>
        <ul className={classes.mealcategory}>
          <li>
            Category: {''} {data.strCategory}
          </li>
        </ul>
        <h2>
          Area: {''} {data.strArea}
        </h2>

        <h2>
          Tags: {data?.strTags?.split(', ').join(' ,')}
        </h2>

        <div className={classes.ingredientstable}>
        <Ingredients ingredientsWithMeasures={ingredientsWithMeasures}></Ingredients>
      </div>

      </div>

      <div className={classes.top}>
        <div className={classes.img}>
          <img src={data.strMealThumb}></img>
        </div>

      </div>

      

      <div className={classes.steps}>
        <h2 className={classes.instructions}>Instructions:</h2>
        <h2>{data.strInstructions.split('.').filter((sentence) => sentence !== '').map((sentence) => (
          <li key={sentence}>
            {sentence}
            .
          </li>
        ))}</h2>
      </div>
    </div>


  )
}

export default SinglePage