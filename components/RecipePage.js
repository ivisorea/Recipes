import React from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"
import "./RecipePage.css"

const RecipePage = ({ recipes }) => {
  const params = useParams();
  return (
    <>
      {recipes.map(
        (recipe, index) =>
          parseInt(recipe.id) === parseInt(params.id) && (
            <Container key={index}>
              <Row>
                <Col>
                  <img src={recipe.image} alt="" />
                </Col>
                <Col style={{ paddingTop: "45px"}}>
                  <h2>{recipe.name}</h2>
                  <h3>Description</h3>
                  <ReactMarkdown>{recipe.description}</ReactMarkdown>
                  <h3>Ingredients</h3>
                  <ReactMarkdown>{recipe.ingredients}</ReactMarkdown>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Instruction</h3>
                  <ReactMarkdown>{recipe.method}</ReactMarkdown>
                </Col>
              </Row>
            </Container>
          )
      )}
    </>
  );
};

export default RecipePage;
