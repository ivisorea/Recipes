import React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { RecipeForm } from '../../components/RecipeForm'

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
            <RecipeForm 
                recipeName={recipeName}
                recipeDescription={recipeDescription}
                recipeIngredients={recipeIngredients}
                recipeMethod={recipeMethod}
                recipeEvent={recipeEvent}
                recipeImage={recipeImage}
                handleSubmit={handleSubmit}
                imageRecipe={imageRecipe}
                setRecipeName={setRecipeName}
                setRecipeDescription={setRecipeDescription}
                setRecipeIngredients={setRecipeIngredients}
                setRecipeMethod={setRecipeMethod}
                setRecipeEvent={setRecipeEvent}
                setRecipeImage={setRecipeImage}
            />
        </div>
        </Container>
    )
}
