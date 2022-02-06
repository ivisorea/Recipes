import React from 'react'
import { ImageSlider } from '../../components/ImageSlider'
import { Search } from '../../components/Search'

export const Home = ({recipes, loading}) => {
    return (
        <>
            <div className='search'>
                <Search recipes={recipes}/>
            </div>
            <div className='images-slider'>
                <ImageSlider recipes={recipes} loading={loading}/>
            </div>
        </>
        
    )
}
