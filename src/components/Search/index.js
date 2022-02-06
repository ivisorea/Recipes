import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import './styles.css'


export const Search = ({recipes}) => {
    const [recipeName, setRecipeName] = useState('')
    const [suggestions, setSuggestions] = useState('')
    
    const onChangeHandler = (recipeName) => {
        let matches = []
        if(recipeName.length > 0){
            matches = recipes.filter(recipe => recipe.recipe_name.toLowerCase().includes(recipeName.toLowerCase()))
        }
        console.log(matches)
        setSuggestions(matches)
        setRecipeName(recipeName)
    }

    return (
        <div className='search-container'>
           <section className="container-fluid">
           </section>
                <form className="form-inline">
                    <input className="form-control search-input" 
                    type="search"
                    placeholder="Search a recipe..."
                    aria-label="Search" 
                    value={recipeName}
                    onChange={e => onChangeHandler(e.target.value)}
                    />
                    {suggestions.length > 0 && (
                        <ul className="form-control suggest-list search-input">
                            {suggestions.map(suggestion => ( 
                                <li key={suggestion.recipe_id}>
                                    <Link to={`/recipes/${suggestion.recipe_id}`}>
                                    {suggestion.recipe_name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </form>
            

 
        </div>
    )
}

