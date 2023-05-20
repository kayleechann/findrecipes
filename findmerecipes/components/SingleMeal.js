import React from 'react'
import styles from './SingleMeal.module.css'
import Link from 'next/link';

function SingleMeal({ meal }) {
  return (

    <div className={styles.singlecontainer}>
       <Link href={`/meals/${meal.idMeal}`} legacyBehavior>
      <a className={styles.item}>

        <div className={styles.mealimg}>
          <img src={meal.strMealThumb}></img>
        </div>

        <div className={styles.mealname}>
          <h3 className={styles.title} >{meal.strMeal}</h3>
        </div>

      </a>
    </Link>
    </div>
   
  )
}

export default SingleMeal