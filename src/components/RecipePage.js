import React from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";

const RecipePage = ({ recipes }) => {
  const params = useParams();
  return (
    <div>
      {recipes.map(
        (recipe, index) =>
          parseInt(recipe.id) === parseInt(params.id) && (
            <div key={index}>
              <img src={recipe.image} alt="" />
              <h2>{recipe.name}</h2>
              <ReactMarkdown>{recipe.description}</ReactMarkdown>
              <ReactMarkdown>{recipe.ingredients}</ReactMarkdown>
              <ReactMarkdown>{recipe.method}</ReactMarkdown>
            </div>
          )
      )}
    </div>
  );
};

export default RecipePage;
