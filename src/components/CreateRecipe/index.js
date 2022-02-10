import React from 'react'
import { useState } from 'react'
import { Col, Form, Row, Button, Container, FloatingLabel } from 'react-bootstrap'
import './styles.css'

export const CreateRecipe = ({getData}) => {
    const [recipeName, setRecipeName] = useState('')
    const [recipeDescription, setRecipeDescription] = useState('')
    const [recipeIngredients, setRecipeIngredients] = useState('')
    const [recipeMethod, setRecipeMethod] = useState('')
    const [recipeEvent, setRecipeEvent] = useState('')
    const [recipeImage, setRecipeImage] = useState('')

    const imageRecipe = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    
    const handleSubmit = (e) => {
        let recipe = { recipe_name: recipeName, recipe_description: recipeDescription, recipe_ingredients: recipeIngredients, recipe_method: recipeMethod, recipe_event: recipeEvent, recipe_image: recipeImage }
        fetch ('https://recipes-backend-endpoint.herokuapp.com/api/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
        .then(res => res.json())
        .then(data => getData())
        .catch(err => console.log(err))
        e.preventDefault()

        setRecipeName('')
        setRecipeDescription('')
        setRecipeIngredients('')
        setRecipeMethod('')
        setRecipeEvent('')
        setRecipeImage('')

    }


    

    return (
        <Container fluid="md">
           
        <div className="mb-5 mt-5 form">
            <h2>Create Recipe</h2>
            <form method="POST" enctype="multipart/form-data" className="form-inline container-sm">
                <Row className='mt-4'>
                    <Col>
                        <FloatingLabel label='Image URL' className='mb-3'>
                            <Form.Control 
                                type="text" 
                                name="recipe_image"
                                value= {recipeImage}
                                onChange={(e) => setRecipeImage(e.target.value)}
                                placeholder="Image URL..."
                                className='bg-light border-0'
                                />
                        </FloatingLabel>
                        <img src={
                            imageRecipe ? recipeImage : imageRecipe
                        } alt=''/>
                    </Col>
                
                    <Col>
                        <FloatingLabel label='Recipe Name' className="mb-3">
                            <Form.Control 
                                placeholder="Recipe Name" 
                                name="recipe_name"
                                value= {recipeName}
                                onChange={(e) => setRecipeName(e.target.value)}
                                style={{width: '100%'}}
                                className='bg-light border-0'
                                />
                        </FloatingLabel>
                        <FloatingLabel label='Description' className="mb-3">
                            <Form.Control 
                                as="textarea" 
                                placeholder="Description" 
                                name="recipe_description" 
                                value= {recipeDescription}
                                onChange={(e) => setRecipeDescription(e.target.value)}
                                style={{width: '100%', height: '6rem'}}
                                className='bg-light border-0'
                                />
                        </FloatingLabel>
                        
                    
                        <FloatingLabel label='Ingredients' className="mb-3">
                            <Form.Control 
                                as="textarea"
                                placeholder="Ingredients" 
                                name="recipe_ingredients" 
                                value= {recipeIngredients}
                                onChange={(e) => setRecipeIngredients(e.target.value)}
                                style={{width: '100%', height: '10rem'}}
                                className='bg-light border-0'
                                />
                        </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <FloatingLabel label='Method'className="mb-3">
                            <Form.Control 
                                as="textarea" 
                                placeholder="Method" 
                                name="recipe_method" 
                                value= {recipeMethod}
                                onChange={(e) => setRecipeMethod(e.target.value)}
                                style={{width: '100%', height: '10rem'}}
                                className='bg-light border-0'
                                />
                        </FloatingLabel>
                        <FloatingLabel label='Event'>
                            <Form.Control 
                                type="text" 
                                placeholder="Event"
                                name="recipe_event"
                                value= {recipeEvent}
                                onChange={(e) => setRecipeEvent(e.target.value)}
                                style={{width: '50%'}}
                                className='bg-light border-0'
                                />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Button 
                    variant="secondary" 
                    type="submit"
                    onClick={handleSubmit}
                    >
                    Submit
                </Button>
            </form>
        </div>
        </Container>
    )
}
