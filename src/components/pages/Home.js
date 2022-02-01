import React from 'react'
import Imageslider from '../Imageslider'
import Search from '../Search'

export const Home = ({recipes, loading}) => {
    return (
        <>
            <div className='search'>
                <Search recipes={recipes}/>
            </div>
            <div className='images-slider'>
                <Imageslider recipes={recipes} loading={loading}/>
            </div>
        </>
        
    )
}
