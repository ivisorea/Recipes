import React from "react";
import { useParams } from "react-router";

const RecipePage = ({ recipes }) => {
  const params = useParams();
  return (
    <div>
      {recipes.map((recipe, index) => {
        //   CHECKING IF URL MATCHES RECIPE ID
        if (parseInt(recipe.id) === parseInt(params.id)) {
          return (
            <div key={index}>
              <img src={recipe.image} alt="" />
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
              <p>{recipe.ingredients}</p>
              <p>{recipe.method}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default RecipePage;
