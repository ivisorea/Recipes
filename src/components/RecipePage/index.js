import React from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"
import "./styles.css"

export const RecipePage = ({ recipes }) => {
  const params = useParams();
  return (
    <div className="recipe_container">
      {recipes.map(
        (recipe, index) =>
          parseInt(recipe.recipe_id) === parseInt(params.id) && (
            <Container key={index}>
              <h1>{recipe.recipe_name}</h1>
              <Row>
                <Col>
                    <img src={recipe.recipe_image} alt="" />
                </Col>
                <Col style={{ paddingTop: "45px"}}>
                  
                  <h3>Description</h3>
                  <ReactMarkdown>{recipe.recipe_description}</ReactMarkdown>
                  <h3>Ingredients</h3>
                  <ReactMarkdown>{recipe.recipe_ingredients}</ReactMarkdown>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Instruction</h3>
                  <ReactMarkdown>{recipe.recipe_method}</ReactMarkdown>
                </Col>
              </Row>
            </Container>
          )
      )}
    </div>
  );
};

