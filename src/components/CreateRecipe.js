import React from 'react'
import { useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import './CreateRecipe.css'

const CreateRecipe = () => {
    const [recipeName, setRecipeName] = useState('')
    const [recipeDescription, setRecipeDescription] = useState('')
    const [recipeIngredients, setRecipeIngredients] = useState('')
    const [recipeMethod, setRecipeMethod] = useState('')
    const [recipeEvent, setRecipeEvent] = useState('')
    const [recipeImage, setRecipeImage] = useState('')

    const handleSubmit = (e) => {
        let recipe = { recipe_name: recipeName, recipe_description: recipeDescription, recipe_ingredients: recipeIngredients, recipe_method: recipeMethod, recipe_event: recipeEvent, recipe_image: recipeImage }
        fetch ('https://recipes-app-wbs.herokuapp.com/api/recipes/create-recipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

        e.preventDefault()
    }
    

    return (
        <div className="form">
            <h2>Create Recipe</h2>
            <form method="POST" enctype="multipart/form-data" className="form-inline container-sm"
            >
                <Row>
                    <Col>
                        <Form.Label >Recipe Name</Form.Label>
                        <Form.Control 
                            placeholder="Recipe Name" 
                            name="recipe_name"
                            value= {recipeName}
                            onChange={(e) => setRecipeName(e.target.value)}
                            style={{width: '80%'}}
                            />
                   
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            placeholder="Description" 
                            name="recipe_description" 
                            value= {recipeDescription}
                            onChange={(e) => setRecipeDescription(e.target.value)}
                            
                            style={{width: '80%'}}
                            />
                    
                        <Form.Label>Ingredients</Form.Label>
                        <Form.Control 
                            placeholder="Ingredients" 
                            name="recipe_ingredients" 
                            value= {recipeIngredients}
                            onChange={(e) => setRecipeIngredients(e.target.value)}
                            
                            style={{width: '80%'}}
                            />
                    
                        <Form.Label>Method</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            placeholder="Method" 
                            name="recipe_method" 
                            value= {recipeMethod}
                            onChange={(e) => setRecipeMethod(e.target.value)}
                            
                            style={{width: '80%'}}
                            />

                        <Form.Label>Event</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="recipe_event"
                            value= {recipeEvent}
                            onChange={(e) => setRecipeEvent(e.target.value)}
                            />

                        <Form.Label>Image</Form.Label>
                        <Form.Control 
                            type="file" 
                            name="recipe_image"
                            value= {recipeImage}
                            onChange={(e) => setRecipeImage(e.target.value)}
                            />
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
    )
}

export default CreateRecipe