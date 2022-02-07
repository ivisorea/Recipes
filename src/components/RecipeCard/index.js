import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";


export const RecipeCard = ({ recipe }) => {

  return (
    <>
      {/* ----Recipes Card using bootstrap components---- */}
      <Card className="card_recipes">
        <Link to={`/recipes/${recipe.recipe_id}`}>
          <Card.Img variant="top" src={recipe.recipe_image} />
        </Link>
        <Card.Body>
          <Link to={`/recipes/${recipe.recipe_id}`} className="default-link">
            <Card.Title>{recipe.recipe_name}</Card.Title>
          </Link>

          
        </Card.Body>
      </Card>
    </>
  );
};
