import React from 'react';
import styles from './Ingredients.module.css';

function IngredientsTable({ ingredientsWithMeasures }) {
  return (
    <>
      <h1 className={styles.title}>Ingredients</h1>
      <table className={styles.ingredientsTable}>
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