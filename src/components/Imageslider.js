import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import { CardGroup } from 'react-bootstrap';
import './Imageslider.css'



const Imageslider = ({recipes}) => {
    return (
        <>
            <Carousel interval={null} variant="dark" className='card_recipes'>
              {recipes.map(recipe => (
                <Carousel.Item key={recipe.id}>
                    <CardGroup>
                        <Card className='card_recipes'>
                            <Card.Img variant="top" src={recipe.image} />
                            <Card.Body>
                                <Card.Title>{recipe.name}</Card.Title>
                                <Card.Text>
                                    {recipe.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

export default Imageslider
