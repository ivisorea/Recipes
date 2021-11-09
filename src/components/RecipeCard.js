import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
//import css file
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <>
      {/* ----Recipes Card using bootstrap components---- */}
      <Card className="card_recipes">
        <Link to={`/recipes/${recipe.id}`}>
          <Card.Img variant="top" src={recipe.image} />
        </Link>
        <Card.Body>
          <Link to={`/recipes/${recipe.id}`} className="default-link">
            <Card.Title>{recipe.name}</Card.Title>
          </Link>

          <Card.Text>{recipe.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default RecipeCard;
