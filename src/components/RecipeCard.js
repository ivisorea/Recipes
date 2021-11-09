import Card from 'react-bootstrap/Card'
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
//import css file
import './RecipeCard.css'

const RecipeCard = ({recipe}) => {
    return (
        <>
        {/* ----Recipes Card using bootstrap components---- */}
            <Card className='card_recipes'>
                <Card.Img variant="top" src={recipe.image} />
                <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                    <Card.Text>
                        {recipe.description}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </>
    

    )
}

export default RecipeCard
