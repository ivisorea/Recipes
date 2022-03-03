import React from 'react'
import { Col, Form, Row, Button, FloatingLabel } from 'react-bootstrap'

export const RecipeForm = ({
    recipeName,
    recipeDescription,
    recipeIngredients,
    recipeMethod,
    recipeEvent,
    recipeImage,
    handleSubmit,
    imageRecipe,
    setRecipeName,
    setRecipeDescription,
    setRecipeIngredients,
    setRecipeMethod,
    setRecipeEvent,
    setRecipeImage
}) => {
  return (
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
  )
}
