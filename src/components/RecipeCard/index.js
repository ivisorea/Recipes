import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ShowMoreText from "react-show-more-text";
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

          {/* ---- ShowMoreText component to show only first 200 characters of the description ---*/}
            <ShowMoreText
                lines={2}
                more="Show more"
                less="Show less"
                anchorClass=""  
                expanded={false}
                width={300}
            >
            <Card.Text>{recipe.recipe_description}</Card.Text>
            </ShowMoreText>

            {/* ---- Button to show more details of the recipe ----*/}
          <Button 
            variant="outline-secondary" 
            size="sm" 
            as={Link}
            to={`/recipes/${recipe.recipe_id}`}
          >Go To Recipe</Button>
        </Card.Body>
      </Card>
    </>
  );
};

