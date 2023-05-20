import React from 'react'
import classes from './SingleMeal.module.scss'
import Link from 'next/link';

function SingleMeal({ meal }) {
  return (

    <div className={classes.singlecontainer}>
       <Link href={`/meals/${meal.idMeal}`} legacyBehavior>
      <a className={classes.item}>

        <div className={classes.mealimg}>
          <img src={meal.strMealThumb}></img>
        </div>

        <div className={classes.mealname}>
          <h3 className={classes.title} >{meal.strMeal}</h3>
        </div>

      </a>
    </Link>
    </div>
   
  )
}

export default SingleMeal