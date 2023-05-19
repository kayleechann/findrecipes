import React from 'react';
import classes from './Ingredients.module.scss';

function IngredientsTable({ ingredientsWithMeasures }) {
  return (
    <>
      <h1 className={classes.title}>Ingredients</h1>
      <table className={classes.ingredientsTable}>
        <tbody>
          {ingredientsWithMeasures.map((ingredient) => (
            <tr key={ingredient.index}>
              <td>
                <p>
                  {ingredient.ingredient}
                </p>
              </td>
              <td>
                <p>
                  {ingredient.measure}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default IngredientsTable;