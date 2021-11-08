import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import './Imageslider.css'
import RecipeCard from './RecipeCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Imageslider = ({recipes}) => {
    // -------Defining settings for the slider------
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,

    }
    return (
        <>
            {/* -------Carousel using Bootstrap---------- */}
            <Carousel interval={null} variant="dark" className='card_recipes'>
              {recipes.map(recipe => (
                <Carousel.Item key={recipe.id}>
                     <RecipeCard recipe={recipe}/>         
                </Carousel.Item>
                ))}
            </Carousel>

            {/* -------Carousel using Slick---------- */}
            <div style={{ margin: "30px" }} className="carousel">
                <h1>Basic carousel</h1>
                <Slider {...settings}>
                    {recipes.map((recipe) => (
                        <RecipeCard recipe={recipe}/>    
                    ))}
                </Slider>
            </div>

       
            


        </>
    )
}



export default Imageslider
