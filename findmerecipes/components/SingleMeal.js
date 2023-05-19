import React from 'react'
import classes from './SingleMeal.module.scss'
import Link from 'next/link';

function SingleMeal({meal}) {
  return (
    <Link href={`/meals/${meal.idMeal}`} legacyBehavior>
        <a className={classes.item}>
            <img src={meal.strMealThumb} height="200" width="200"></img>
            <h1 className={classes.title} >{meal.strMeal}</h1>
        </a>
    </Link>
  )
}

export default SingleMeal